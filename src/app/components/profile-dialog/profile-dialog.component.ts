import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {IUser} from '../../interfaces/user.interface';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../store/app.store';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {getAuthUser} from '../../store/user/user.reducer';
import {DialogData} from '../group-create-dialog/group-create-dialog.component';
import {UpdateUser} from '../../store/user/user.actions';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {
  profileForm: FormGroup;
  authUser$: Observable<IUser>;

  constructor(
      private store: Store<IAppStore>,
      public dialogRef: MatDialogRef<ProfileDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.authUser$ = this.store.select(getAuthUser);
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl(''),
    });
    this.initialFormValues();
  }

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  initialFormValues(): void {
    this.authUser$.subscribe(user => {
      this.profileForm.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      });
    });
  }

  onSubmit(): void {
    const values = this.profileForm.value;
    let userId = '';
    if (values.password === '') {
      delete values.password;
    }
    this.authUser$.subscribe(user => userId = user._id);
    this.store.dispatch(new UpdateUser({
      data: values,
      userId
    }));

    this.close();
  }
}

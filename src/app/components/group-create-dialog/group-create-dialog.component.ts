import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../store/app.store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {getAuthUser} from '../../store/user/user.reducer';
import {IUser} from '../../interfaces/user.interface';
import {Observable} from 'rxjs';
import {CreateGroup} from '../../store/group/group.action';
import {IGroup} from '../../interfaces/group.interface';

export interface DialogData {
  title: string;
}

@Component({
  selector: 'app-group-create-dialog',
  templateUrl: './group-create-dialog.component.html',
  styleUrls: ['./group-create-dialog.component.scss']
})
export class GroupCreateDialogComponent implements OnInit {
  groupCreateForm: FormGroup;
  authUser$: Observable<IUser>;

  constructor(
      private store: Store<IAppStore>,
      public dialogRef: MatDialogRef<GroupCreateDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.authUser$ = this.store.select(getAuthUser);
    this.groupCreateForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const { title } = this.groupCreateForm.value;
    const data: IGroup = {
      title,
      ownerId: ''
    };

    this.authUser$.subscribe( user => data.ownerId = user._id);
    this.store.dispatch(new CreateGroup(data));
    this.close();
  }
}

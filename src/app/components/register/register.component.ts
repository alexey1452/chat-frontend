import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../store/app.store';
import {RegisterUser} from '../../store/user/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private store: Store<IAppStore>) {
      this.registerForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
      });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const values = this.registerForm.value;
    this.store.dispatch(new RegisterUser(values));
  }
}

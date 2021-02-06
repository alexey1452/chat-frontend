import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { IAppStore } from '../../store/app.store';
import { Logout } from '../../store/user/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<IAppStore>) { }

  ngOnInit(): void {
  }

  logout(): void {
      this.store.dispatch(new Logout());
  }
}

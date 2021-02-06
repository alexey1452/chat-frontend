import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../store/app.store';
import {GetUser} from '../../store/user/user.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
      private store: Store<IAppStore>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetUser());
  }

}

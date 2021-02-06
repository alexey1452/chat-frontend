import { Component, OnInit } from '@angular/core';
import { IAppStore } from '../../store/app.store';
import { Logout } from '../../store/user/user.actions';
import { IUser } from '../../interfaces/user.interface';
import { getAuthUser } from '../../store/user/user.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authUser$: Observable<IUser>;
  username: string;

  constructor(private store: Store<IAppStore>) {
      this.username = '';
      this.authUser$ = this.store.select(getAuthUser);
      this.authUser$.subscribe(user => {
          this.username = user.firstName + ' ' + user.lastName;
      });
  }

  ngOnInit(): void { }

  logout(): void {
      this.store.dispatch(new Logout());
  }
}

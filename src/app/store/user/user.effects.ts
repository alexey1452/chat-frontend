import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {switchMap, catchError, tap} from 'rxjs/operators';
import * as userActions from './user.actions';
import { UserService } from '../../services/user.service';
import {IUser, IUserLogin} from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService,
        private router: Router
    ) {}

    @Effect()
    registerUser$ = this.actions$.pipe(
        ofType(userActions.REGISTER_USER),
        switchMap((payload: IUser) => this.userService.registerUser(payload)),
        switchMap((user: IUser) => of(new userActions.RegisterUserSuccess(user))),
        catchError(() => of(new userActions.RegisterUserError()))
    );

    @Effect()
    login$ = this.actions$.pipe(
        ofType(userActions.LOGIN),
        switchMap((payload: IUser) => this.userService.login(payload)),
        switchMap((user: IUserLogin) => of(new userActions.LoginSuccess(user))),
        catchError(() => of(new userActions.LoginError()))
    );

    @Effect({ dispatch: false })
    loginSuccess = this.actions$.pipe(
        ofType(userActions.LOGIN_SUCCESS),
        tap(() => this.router.navigateByUrl('/dashboard'))
    );

    @Effect()
    logout$ = this.actions$.pipe(
        ofType(userActions.LOGOUT),
        switchMap(() => of(new userActions.LogoutSuccess())),
    );

    @Effect({ dispatch: false })
    logoutSuccess = this.actions$.pipe(
        ofType(userActions.LOGOUT_SUCCESS),
        tap(() => this.router.navigateByUrl('/login'))
    );

}

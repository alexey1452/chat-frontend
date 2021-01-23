import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError } from 'rxjs/operators';
import * as userActions from './user.actions';
import { UserService } from '../../services/user.service';
import {IUser} from '../../interfaces/user.interface';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}

    @Effect()
    registerUser$ = this.actions$.pipe(
        ofType(userActions.REGISTER_USER),
        switchMap((payload: IUser) => this.userService.registerUser(payload)),
        switchMap((user: IUser) => of(new userActions.RegisterUserSuccess(user))),
        catchError(() => of(new userActions.RegisterUserError()))
    );

}

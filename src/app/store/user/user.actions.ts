import { Action } from '@ngrx/store';
import { IUser } from '../../interfaces/user.interface';

export const REGISTER_USER = '[IUser] Register IUser';
export class RegisterUser implements Action {
    readonly type = REGISTER_USER;
    constructor(public payload: IUser) {}
}

export const REGISTER_USER_SUCCESS = '[IUser] Register IUser Success';
export class RegisterUserSuccess implements Action {
    readonly type = REGISTER_USER_SUCCESS;
    constructor(public payload: IUser) {}
}

export const REGISTER_USER_ERROR = '[IUser] Register IUser Error';
export class RegisterUserError implements Action {
    readonly type = REGISTER_USER_ERROR;
}

export type UserActions = RegisterUser | RegisterUserSuccess | RegisterUserError;

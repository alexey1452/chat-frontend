import { Action } from '@ngrx/store';
import {IUser, IUserLogin} from '../../interfaces/user.interface';

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

export const LOGIN = '[IUser] Login';
export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: IUser) {}
}

export const LOGIN_SUCCESS = '[IUser] Login IUser Success';
export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: IUserLogin) {}
}

export const LOGIN_ERROR = '[IUser] Login IUser Error';
export class LoginError implements Action {
    readonly type = LOGIN_ERROR;
}


export const LOGOUT = 'Logout';
export class Logout implements Action {
    readonly type = LOGOUT;
}

export const LOGOUT_SUCCESS = 'Logout Success';
export class LogoutSuccess implements Action {
    readonly type = LOGOUT_SUCCESS;
}

export type UserActions = RegisterUser | RegisterUserSuccess | RegisterUserError | Login | LoginSuccess | LoginError |
    Logout | LogoutSuccess;

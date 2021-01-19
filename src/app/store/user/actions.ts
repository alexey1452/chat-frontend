import { Action } from '@ngrx/store';
import { User } from '../../models/user';


export const REGISTER_USER = '[User] Register User';
export class RegisterUser implements Action {
    readonly type = REGISTER_USER;
    constructor(public payload: User) {}
}

export type Actions = RegisterUser;

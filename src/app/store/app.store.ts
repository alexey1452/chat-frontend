import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from './user/user.reducer';
import {initialUserState} from './user/user.reducer';

export interface IAppStore {
    user: fromUser.IUserState;
}

export const initialAppStore: IAppStore = {
    user: initialUserState
};

export const reducers: ActionReducerMap<IAppStore, any> = {
    user: fromUser.userReducer
};

export function getInitialStore(): IAppStore {
    return initialAppStore;
}

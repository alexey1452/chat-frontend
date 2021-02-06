import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from './user/user.reducer';
import * as fromGroup from './group/group.reducer';
import {initialUserState} from './user/user.reducer';
import {initialGroupState} from './group/group.reducer';

export interface IAppStore {
    user: fromUser.IUserState;
    group: fromGroup.IGroupState;
}

export const initialAppStore: IAppStore = {
    user: initialUserState,
    group: initialGroupState
};

export const reducers: ActionReducerMap<IAppStore, any> = {
    user: fromUser.userReducer,
    group: fromGroup.groupReducer
};

export function getInitialStore(): IAppStore {
    return initialAppStore;
}

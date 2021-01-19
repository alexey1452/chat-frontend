import { Action } from '@ngrx/store';
import * as userAction from '../user/actions';
import { User } from '../../models/user';

export interface State {
    authUser: User|null;
    users: User[];
}

export const initialState: State = {
    authUser: null,
    users: []
};

export function reducer(state = initialState, action: userAction.Actions): State {
    switch (action.type) {
        case userAction.REGISTER_USER: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
}

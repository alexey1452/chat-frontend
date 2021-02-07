import * as userAction from './user.actions';
import { IUser } from '../../interfaces/user.interface';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface IUserState {
    authUser: IUser;
    users: IUser[];
}

export const initialUserState: IUserState = {
    authUser: {
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
    },
    users: []
};

export function userReducer(state = initialUserState, action: userAction.UserActions): IUserState {
    switch (action.type) {
        case userAction.REGISTER_USER_ERROR:
        case userAction.LOGIN_ERROR:
        case userAction.GET_USER_ERROR:
        case userAction.LOGIN:
        case userAction.LOGOUT:
        case userAction.UPDATE_USER:
        case userAction.UPDATE_USER_ERROR:
        case userAction.GET_USER:
        case userAction.REGISTER_USER: {
            return {
                ...state,
            };
        }
        case userAction.REGISTER_USER_SUCCESS: {
            return {
                ...state,
                authUser: action.payload
            };
        }
        case userAction.LOGIN_SUCCESS: {
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authUser: action.payload.user
            };
        }
        case userAction.GET_USER_SUCCESS: {
            return {
                ...state,
                authUser: action.payload
            };
        }
        case userAction.LOGOUT_SUCCESS: {
            localStorage.removeItem('token');
            return {
                ...state,
                authUser: initialUserState.authUser
            };
        }
        case userAction.UPDATE_USER_SUCCESS: {
            return {
                ...state,
                authUser: action.payload
            };
        }
        default:
            return state;
    }
}

export const getUserState =
    createFeatureSelector<IUserState>('user');

export const getAuthUser = createSelector(
    getUserState,
    (state: IUserState) => state.authUser,
);

import * as groupAction from './group.action';
import { IGroup } from '../../interfaces/group.interface';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface IGroupState {
    group: IGroup|null;
    groups: IGroup[];
}

export const initialGroupState: IGroupState = {
    group: null,
    groups: []
};

export function groupReducer(state = initialGroupState, action: groupAction.GroupActions): IGroupState {
    switch (action.type) {
        case groupAction.CREATE_GROUP:
        case groupAction.CREATE_GROUP_ERROR: {
            return {
                ...state,
            };
        }
        case groupAction.CREATE_GROUP_SUCCESS: {
            return {
                ...state,
                groups: [...state.groups, action.payload]
            };
        }
        default:
            return state;
    }
}

export const getGroupState =
    createFeatureSelector<IGroupState>('group');

export const getCurrentGroup = createSelector(
    getGroupState,
    (state: IGroupState) => state.group,
);

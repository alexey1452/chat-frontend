import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromUser from './user/reducers';

export interface State {
    user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
    user: fromUser.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

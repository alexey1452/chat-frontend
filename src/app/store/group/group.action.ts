import { Action } from '@ngrx/store';
import { IGroup } from '../../interfaces/group.interface';

export const CREATE_GROUP = '[IGroup] Create Group';
export class CreateGroup implements Action {
    readonly type = CREATE_GROUP;
    constructor(public payload: IGroup) {}
}

export const CREATE_GROUP_SUCCESS = '[IGroup] Create Group Success';
export class CreateGroupSuccess implements Action {
    readonly type = CREATE_GROUP_SUCCESS;
    constructor(public payload: IGroup) {}
}

export const CREATE_GROUP_ERROR = '[IGroup] Create Group Error';
export class CreateGroupError implements Action {
    readonly type = CREATE_GROUP_ERROR;
}

export type GroupActions = CreateGroup | CreateGroupSuccess | CreateGroupError;

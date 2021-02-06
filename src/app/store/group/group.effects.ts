import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {switchMap, catchError} from 'rxjs/operators';
import * as groupActions from './group.action';
import { GroupService } from '../../services/group.service';
import { IGroup } from '../../interfaces/group.interface';
import { of } from 'rxjs';

@Injectable()
export class GroupEffects {
    constructor(
        private actions$: Actions,
        private groupService: GroupService,
    ) {}

    @Effect()
    createGroup$ = this.actions$.pipe(
        ofType(groupActions.CREATE_GROUP),
        switchMap((payload: IGroup) => this.groupService.createGroup(payload)),
        switchMap((group: IGroup) => of(new groupActions.CreateGroupSuccess(group))),
        catchError(() => of(new groupActions.CreateGroupError()))
    );
}

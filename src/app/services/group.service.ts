import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {IGroup, IGroupHttp} from '../interfaces/group.interface';

@Injectable()
export class GroupService {
    constructor(private http: HttpClient) {}

    createGroup(payload: IGroup): Observable<IGroupHttp> {
        return this.http
            .post<IGroupHttp>(`http://localhost:3000/groups/create`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

}

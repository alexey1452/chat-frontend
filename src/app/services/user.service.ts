import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    registerUser(payload: IUser): Observable<IUser> {
        return this.http
            .post<IUser>(`http://localhost:3000/users/register`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    login(payload: IUser): Observable<IUser> {
        return this.http
            .post<IUser>(`http://localhost:3000/users/login`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

}

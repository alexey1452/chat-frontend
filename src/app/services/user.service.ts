import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {IUser, IUserLogin, IUserUpdate} from '../interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    registerUser(payload: IUser): Observable<IUser> {
        return this.http
            .post<IUser>(`http://localhost:3000/auth/register`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    login(payload: IUser): Observable<IUserLogin> {
        return this.http
            .post<IUserLogin>(`http://localhost:3000/auth/login`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    getUser(): Observable<IUser> {
        return this.http
            .get<IUser>(`http://localhost:3000/users/im`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    updateUser(payload: IUserUpdate): Observable<IUser> {
        return this.http
            .put<IUser>(`http://localhost:3000/users/im`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}

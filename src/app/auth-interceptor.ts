import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Observable} from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'Content-Type' : 'application/json; charset=utf-8',
                Accept         : 'application/json',
                Authorization  : `Bearer ${this.auth.getToken()}`,
            },
        });

        return next.handle(req);
    }
}

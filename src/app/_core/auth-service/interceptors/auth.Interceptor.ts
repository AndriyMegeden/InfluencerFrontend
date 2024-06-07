import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, map, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor extends AuthService implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              const url = this.remoteApi + this.refreshTokenRoute;
              if (url === request.url) {
                this.logout()
                return throwError(error);
              }
              if (!this.refreshTokenInProgress) {
                this.refreshTokenInProgress = true;
                this.$refreshTokenSubject.next(null);
                return this.refreshToken(request,next).pipe(
                  switchMap(() => {
                    const authReq = request.clone({
                      setHeaders: {
                        Authorization: `Bearer ${this.localStorage.getToken().token}`,
                      },
                    });
                    return next.handle(authReq);
                  }),
                  catchError((err: any) => {
                    // Handle any errors that occur while handling the updated request
                    return throwError(err);
                  }),
                  finalize(() => {
                    this.refreshTokenInProgress = false;
                    this.$refreshTokenSubject.next(true);
    
                  })
                );
              } else {
                return this.$refreshTokenSubject.pipe(
                  filter(result => result !== null),
                  take(1),
                  switchMap(() => {
                    const authReq = request.clone({
                      setHeaders: {
                        Authorization: `Bearer ${this.localStorage.getToken().token}`,
                      },
                    });
                    return next.handle(authReq);
                  })
                );
              }
            } else {
              return throwError(error);
            }
          })
        );
    }
}
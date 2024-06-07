// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { FbAuthResponse, User } from '@interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  // потрібно шоб сервіс сам себе задекларував
  providedIn: 'root',
})
export class UserService {


  // private submittedSubject = new BehaviorSubject<boolean>(false);
  // submitted$ = this.submittedSubject.asObservable();

  // setSubmitted(submitted: boolean) {
  //   this.submittedSubject.next(submitted);
    
  // }

  
  private apiUrl = 'http://localhost:3000'; // Замініть це на реальний URL вашого сервера

  public error$: Subject<string> = new Subject<string>();

  constructor(protected router: Router, public http: HttpClient) {}

  getAllUsers(): Observable<any> {
    const url = `${this.apiUrl}/influencer-users`;
    return this.http.get(url);
  }

  get token(): string | null {
    const expDateString = localStorage.getItem("fb-token-exp");
    if (!expDateString) {
      return null; // Если значение не найдено, вернуть null
    }

    const expDate = new Date(expDateString);

    if (isNaN(expDate.getTime())) {
      return null; // Если значение некорректно, вернуть null
    }

    if (new Date() > expDate) {
      this.logOut();
      null;
    }
    return localStorage.getItem("fb-token");
  }


  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    const url = `${this.apiUrl}/influencer-users`;
    return this.http.post(url, user).pipe(
      tap(this.setToken), // Виклик функції setToken для обробки відповіді
      catchError(this.handleError.bind(this)) // Обробка помилок
      
    );
  } 

  logOut() {
    this.setToken(null);
  }

  register(user: any): Observable<any> {
    const url = `${this.apiUrl}/influencer-users`;
    return this.http.post(url, user);
  }

  deleteUser(id: string): Observable<any> {
    const url = `${this.apiUrl}/influencer-users/${id}`;
    return this.http.delete(url);
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    const { message } = error.error.error;
    console.log(message);
    switch (message) {
      case 'INVALID_LOGIN_CREDENTIALS':
        this.error$.next('не вірний емейл або пароль');
        break;
    }

    return throwError('Something bad happened; please try again later.');
  }

  private setToken(response: any | null) {
    if (response) {
      const fbAuthResponse: FbAuthResponse = response as FbAuthResponse;
      const expData = new Date(
        new Date().getTime() + +response.expiresIn * 1000
      );
      // для збереження токена в localStorage
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expData.toString());
    } else {
      localStorage.clear();
    }
  }
}

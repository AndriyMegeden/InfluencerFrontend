/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { FbAuthResponse, User } from '@interfaces/user.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    const savedEmail = localStorage.getItem('email'); // Отримуємо email із localStorage
    if (savedEmail) {
      this.emailSource.next(savedEmail); // Встановлюємо email в BehaviorSubject
    }
  }
  // BehaviorSubject Завжди зберігає останнє значення, яке в нього передали
  private emailSource = new BehaviorSubject<string | null>(null);
  // перетворює наш BehaviorSubject в Observable і на нього можна підписатись в heder
  currentEmail = this.emailSource.asObservable(); // Спостерігач для email

  // зберігаємо емейл у сервісі
  setEmail(email: string) {
    console.log('Email збережено у сервісі:', email);
    this.emailSource.next(email); // Оновлюємо email
    localStorage.setItem('email', email);
  }

  // отримуємо наш токен
  get token(): string | null {
    const expDateString = localStorage.getItem('fb-token-exp');
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
    return localStorage.getItem('fb-token');
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return (
      this.http
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
          user
        )
        // pipe используется для объединения нескольких операторов (функций) в цепочку обработки данных в потоке Observable.
        // tap используется для выполнения побочного действия
        .pipe(tap(this.setToken))
    );
  }

  logOut() {
    this.setToken(null);
    this.emailSource.next(''); // Очищаємо BehaviorSubject
    localStorage.removeItem('email'); // Видаляємо із localStorage
  }

  isAuthenticated() {
    return !!this.token;
  }
  // для зміни токена.Токен д одається до всіх запросів
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

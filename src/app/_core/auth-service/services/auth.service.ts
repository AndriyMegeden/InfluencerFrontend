/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import {
  FbAuthResponse,
  FbCreateResponse,
  User,
} from '@interfaces/user.interface';
import { response } from 'express';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    // Зчитуємо username з localStorage, якщо він є. Потрібно шоб виводилось в шаблон і не зникало
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      this.usernameSubject.next(savedUsername); // Оновлюємо BehaviorSubject
    }
  }
  // BehaviorSubject Завжди зберігає останнє значення, яке в нього передали
  private usernameSubject = new BehaviorSubject<string>('');
  // перетворює наш BehaviorSubject в Observable і на нього можна підписатись в heder
  username$ = this.usernameSubject.asObservable();

  // зберігаємо Username у сервісі
  setUsername(username: string) {
    console.log('username збережено у сервісі:', username);
    this.usernameSubject.next(username); // Оновлюємо username
    localStorage.setItem('username', username); // додаєм в localstorage
  }

  username: string = '';
  id: string = '';

  fetchUsername(email: string) {
    // 3. Завантажуємо дані з Firebase
    this.http
      .get<{ [key: string]: any }>(`${environment.fireBaseDBurl}/users.json`)
      .subscribe(
        (response) => {
          // Перетворюємо об'єкт на масив користувачів
          const users = Object.keys(response).map((key) => ({
            ...response[key],
            id: key,
          }));

          // 4. Знаходимо користувача за email
          const matchedUser = users.find((user) => user.email === email);
          // якшо email збігається з переданим параметром email то виводим наш емейл
          if (matchedUser) {
            this.setUsername(matchedUser.username);
            this.usernameSubject.next(matchedUser.username);
            this.username = matchedUser.username; // Оновлюємо змінну для шаблону
            console.log('Fetched username:', this.username);
          } else {
            console.warn('No user found with the given email.');
          }
        },
        (error) => {
          console.error('Error fetching username:', error);
        }
      );
  }
// отримуємо айді по емейлу який беремо з localstorage
  fetchId(email: string) {
    this.http
      .get<{ [key: string]: any }>(`${environment.fireBaseDBurl}/users.json`)
      .subscribe(
        (response) => {
          const users = Object.keys(response).map((key) => ({
            ...response[key],
            id: key,
          }));
          const matchedUser = users.find((user) => user.email === email);
          if (matchedUser) {
            console.log('Fetched username:', this.id);
          } else {
            console.warn('No user found with the given email.');
          }
        },
        (error) => {
          console.error('Error fetching username:', error);
        }
      );
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

  register(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`,
        user
      )
      .pipe(
        tap((response) => {
          this.setToken(response); // Зберігаємо токен
          localStorage.setItem('email', user.email); // Зберігаємо email в localStorage
        })
      )
  }

  // Ця функція create відправляє HTTP POST-запит для створення нового юзера на сервері.
  create(user: User): Observable<Partial<User>> {
    const userData = {
      username: user.username,
      mobileNumber: user.phoneNumber,
      email: user.email,
    };

    return this.http
      .post<FbCreateResponse>(
        `${environment.fireBaseDBurl}/users.json`,
        userData
      )
      .pipe(
        map((response: FbCreateResponse) => {
          return {
            ...userData,
            id: response.name, // Додаємо ідентифікатор, отриманий із сервера
          };
        })
      );
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
        .pipe(
          tap((response) => {
            this.setToken(response); // Зберігаємо токен
            localStorage.setItem('email', user.email); // Зберігаємо email в localStorage
          })
        )
    );
  }


// отримуєм айді по емейлу і методом remove видаляємо дані користувача з бази даних
  getUserId(email: string): void {
    this.http
      .get<{ [key: string]: any }>(`${environment.fireBaseDBurl}/users.json`)
      .subscribe((response) => {
        if (response) {
          // Перетворюємо базу у масив користувачів
          const users = Object.keys(response).map((key) => ({
            ...response[key],
            id: key, // Додаємо ключ як id
          }));
  
          // Знаходимо користувача за email
          const currentUser = users.find((user) => user.email === email);
  
          if (currentUser) {
            console.log(`Знайдено користувача:`, currentUser);
  
            // Викликаємо метод видалення з отриманим id
            this.remove(currentUser.id).subscribe(() => {
              console.log(`Користувача з id ${currentUser.id} успішно видалено.`);
            });
          } else {
            console.error('Користувач із таким email не знайдений.');
          }
        } else {
          console.error('База даних порожня.');
        }
      });
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fireBaseDBurl}/users/${id}.json`);
  }
  
// цим методом ми вже видаляємо користувача з authentication по його idToken який берем з localstorage
  deleteUser(): void {
    const idToken = localStorage.getItem('fb-token'); // Отримуємо idToken з localStorage
    if (!idToken) {
      console.error('idToken не знайдено в localStorage.');
      return;
    }
  
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${environment.apiKey}`;
    const body = {
      idToken: idToken, // Передаємо idToken
    };
  
    this.http.post(url, body).subscribe(
      (response) => {
        console.log('Користувача успішно видалено:', response);
        localStorage.removeItem('idToken'); // Видаляємо idToken з localStorage
      },
      (error) => {
        console.error('Помилка при видаленні користувача:', error);
      }
    );
  }
  
  logOut() {
    this.setToken(null);
    this.usernameSubject.next(''); // Очищаємо BehaviorSubject
    localStorage.clear();// Видаляємо із localStorage
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

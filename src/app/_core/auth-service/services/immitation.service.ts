// user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  // потрібно шоб сервіс сам себе задекларував
  providedIn: 'root',
})
export class ImmitationService {
  // Сервіс використовує BehaviorSubject для створення спостерігача (observable) зі стандартним значенням по замовчуванню false.
  // Це дозволяє іншим частинам додатку підписуватися на зміни стану аутентифікації та отримувати поточний стан в будь-який момент часу.
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  //інші компоненти та сервіси можуть підписатися на зміни стану аутентифікації
  // через isAuth$ та виконувати дії в залежності від того, чи користувач увійшов в систему чи вийшов з неї.
  isAuth$ = this.isAuthSubject.asObservable();

  constructor(private cookieService: CookieService) {
    const storedAuth = this.cookieService.get('isAuthenticated');
    if (storedAuth === 'true') {
      this.isAuthSubject.next(true);
    }
  }

  login() {
    this.isAuthSubject.next(true);
    this.cookieService.set('isAuthenticated', 'true');
    console.log('пішов логін');
  }
  logout() {
    this.isAuthSubject.next(false);
    // Очищаємо cookie
    this.cookieService.delete('isAuthenticated', '/');
    // Встановлюємо cookie з порожнім значенням
    this.cookieService.set('isAuthenticated', 'false', 0); // Термін дії cookie - 0
    console.log('Користувач вийшов');
  }
  
  //Повертає обіцянку (Promise) для отримання стану аутентифікації.
  //Результат обіцянки - це поточне значення isAuthSubject, що представляє поточний стан аутентифікації.
  isUserLogin(): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(this.isAuthSubject.value);
    });
  }
}

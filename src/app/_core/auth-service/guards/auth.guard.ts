import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve) => {
      if (this.authService.isAuthenticated() === true) {
        resolve(true); // Дозволяємо доступ
      } else {
        // Якщо користувач не авторизований, перенаправляємо його
        this.authService.logOut()
        this.router.navigate(['/main/home'], {
          queryParams: {
            auth: false,
          },
        });
        resolve(false); // Забороняємо доступ
      }
    });
  }
}

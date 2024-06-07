import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'; // Ви можете видалити це, якщо не потрібно затримувати завантаження даних
import { Card } from '@interfaces/listing.interface';
import { CardSettings } from '@static/listing.settings';

@Injectable({ providedIn: 'root' })
export class ListingResolver implements Resolve<Card[]> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Card[]> {
    // Тут ви можете додати будь-яку логіку завантаження даних, наприклад, з CardSettings
    return of(CardSettings); // Приклад затримки для емуляції завантаження даних
  }
}

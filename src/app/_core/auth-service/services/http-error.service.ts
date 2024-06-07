import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {
  
  constructor(){}

  // async getError(key: number){
  //   const translation = await this.translateService.get(`http_errors.${key}`).toPromise();
  //   return translation;
  // }

}

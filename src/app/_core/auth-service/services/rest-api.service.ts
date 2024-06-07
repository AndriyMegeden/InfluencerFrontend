/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
// eslint-disable-next-line max-len
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@environments/environment';
import { LocalStorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  public remoteApi: string = environment.remoteApi;

  constructor(
    private http: HttpClient,
    public localStorage: LocalStorageService,
  ) {
  }

  beforeRequest(secure: boolean){
    if(secure){
      const authToken = this.localStorage.getToken().token;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      });
      return headers;
    }
    else {
      return {};
    }
  }

  public post<BODY>(secure: boolean,url: string, params: HttpParams | any ,body: BODY, resFn?, errFn?, returnParams = false){
    const urlAdress = this.remoteApi + url;
    const reqHeaders = this.beforeRequest(secure);
    if(!returnParams){
      this.http.post(urlAdress, body, { headers: reqHeaders, params: {...params} })
      .subscribe({
        next: (res) => resFn(res),
        error: (err) => errFn(err)
      });
    }
    else{
      return this.http.post(urlAdress, body, { headers: reqHeaders, params: {...params} });
    }
  }

  public async put<BODY>(secure: boolean,url: string,id: string, params: HttpParams | any,  body: BODY, resFn, errFn){
    const urlAdress = this.remoteApi + url + `/${id}`;
    const reqHeaders = this.beforeRequest(secure);
    this.http.put(urlAdress, body, { headers: reqHeaders, params: {...params} })
    .subscribe({
      next: (res) => resFn(res),
      error: (err) => errFn(err)
    });
  }
  
}



import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
type LocalStorageTypes = 'variable' | 'array';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  [x: string]: any;
  
  // private $isTokenExist: BehaviorSubject<boolean>;

  // constructor() {
  //   this.init()
  // }
  
  // public init() {
  //   this.$isTokenExist = new BehaviorSubject<boolean>(this.checkToken());
  // }

  // public isTokenExist(): Observable<boolean> {
  //   return this.$isTokenExist.asObservable();
  // }

  // protected checkToken(){
  //   if(this.getToken() !== null && this.getToken().token){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  // public setToken(authToken){
  //   this.setStorageValue('array', 'authorization', {
  //     token: authToken
  //   });
  //   this.$isTokenExist.next(true);
  // }

  // public setUser(authInfo){
  //   this.setStorageValue('array', 'user', authInfo);
  //   this.$isTokenExist.next(true);
  // }

  // public getToken(){
  //   return this.getStorageValue('array','authorization');
  // }

  // public removeToken(){
  //   this.$isTokenExist.next(false);
  //   return this.removeStorageValue('authorization');
  // }

  // public removeUser(){
  //   this.$isTokenExist.next(false);
  //   return this.removeStorageValue('user');
  // }

  // protected setStorageValue(type: LocalStorageTypes, key: string, value: any){
  //   if(type === 'variable'){
  //     localStorage.setItem(key, value.toString());
  //   }
  //   if(type === 'array'){
  //     localStorage.setItem(key, JSON.stringify(value));
  //   }
  // }

  // protected getStorageValue(type: LocalStorageTypes,key: string){
  //   if(type === 'variable'){
  //     return localStorage.getItem(key);
  //   }
  //   if(type === 'array'){
  //     return JSON.parse(localStorage.getItem(key));
  //   }
  // }

  // protected removeStorageValue(key: string){
  //   localStorage.removeItem(key);
  //   return true;
  // }

  // public getCurrentLanguage(){
  //   return this.getStorageValue('variable','currentLanguage');
  // }

  // public setCurrentLanguage(value){
  //   return this.setStorageValue('variable','currentLanguage',value);
  // }

  

}

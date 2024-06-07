/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { LocalStorageService } from './localstorage.service';
import { BehaviorSubject, fromEvent, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, filter, finalize, map, switchMap, take } from 'rxjs/operators';
import { Base64 } from 'js-base64';
import { CheckRefreshPasswordCodeRequest, CreateUserRequest, GenerateRefreshPasswordCodeRequest, LoginSocialUserRequest, LoginUserRequest, RefreshPasswordRequest, VerificationAuthFieldsRequest } from '../dto/user.dto';
import { AuthInfo, User } from 'src/app/interfaces/user.interface';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RestApiService {

  // Current User
  public $isUser = new BehaviorSubject<User>(null);
  // User Auth Status
  public $isAuth = new BehaviorSubject<boolean>(false);
  // Catch many http request
  protected $refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  protected refreshTokenInProgress = false;

  protected base64 = Base64;

  constructor(
    http: HttpClient,
    localStorage: LocalStorageService,
    protected router: Router,
  )
  {
    super(http, localStorage);
    localStorage.isTokenExist().subscribe((res) => {
      if(res === false){
        this.clearUser()
      }
    })
  }
  

  protected loginRoute = '/auth/login';
  protected loginSocialRoute = '/auth/loginSocial';
  protected createUserRoute = '/auth/createUser';
  protected updateUserRoute = '/auth/updateUser';
  protected verificationEmailRoute = '/auth/verificationAuthFieldsRequest';
  protected generateRefreshPasswordCodeRoute = '/auth/generateRefreshPasswordCode';
  protected checkRefreshPasswordCodeRoute = '/auth/checkRefreshPasswordCode';
  protected refreshPasswordRoute = '/auth/refreshPassword';
  protected refreshTokenRoute = '/auth/refreshToken';
  protected logoutRoute = '/auth/logout';

  public init(){
    this.$isAuth.next(this.checkToken());
    if(this.localStorage.getToken() !== null && this.localStorage.getToken().token){
      const decode = JSON.parse(this.base64.decode(this.localStorage.getToken().token.split('.')[1]));
      this.$isUser.next({
        userId: decode.userId,
        email: decode.email,
        avatar: decode.avatar,
      });
    }
    
    fromEvent(window, 'storage').subscribe((storageEvent: StorageEvent) => {
      this.clearUser()
    });
  }

  public setToken(data){
    this.localStorage.setToken(data.authToken);
    this.localStorage.setUser(data.authInfo);
    this.$isAuth.next(this.checkToken());
    const decode = JSON.parse(this.base64.decode(this.localStorage.getToken().token.split('.')[1]));
    this.$isUser.next({
      userId: decode.userId,
      email: decode.email,
      avatar: decode.avatar,
    });
  }

  protected checkToken(){
    if(this.localStorage.getToken() !== null && this.localStorage.getToken().token){
      return true;
    }
    else{
      return false;
    }
  }

  public isUser(): Observable<AuthInfo> {
    return this.$isUser.asObservable();
  }

  public isLoggedIn(): Observable<boolean> {
    return this.$isAuth.asObservable();
  }
  
  public clearUser() {
    this.$isAuth.next(false);
    this.$isUser.next(null);
    this.router.navigateByUrl('');
  }

  public login(data: LoginUserRequest, resFn, errFn){
    this.post<LoginUserRequest>(false,this.loginRoute, {}, data, (res) => {
      this.setToken(res.data);
      resFn(res)
    }, errFn);
  }

  public loginSocial(data: LoginSocialUserRequest, resFn, errFn){
    this.post<LoginSocialUserRequest>(true,this.loginSocialRoute, {}, data, (res) => {
      this.setToken(res.data);
      resFn(res)
    }, errFn);
  }

  async createUser(data: CreateUserRequest, resFn, errFn){
    this.post<CreateUserRequest>(false,this.createUserRoute, {}, data, (res) => {
      this.setToken(res.data);
      resFn(res)
    }, errFn);
  }

  async updateUser(id: string,data: CreateUserRequest, resFn, errFn){
    this.put<CreateUserRequest>(true,this.updateUserRoute, id, {}, data, (res) => {
      this.setToken(res.data);
      resFn(res)
    }, errFn);
  }

 
  public verificationAuthFieldsRequest(data: VerificationAuthFieldsRequest, resFn, errFn){
    this.post<VerificationAuthFieldsRequest>(false,this.verificationEmailRoute, {},data, resFn, errFn);
  }

  async generateRefreshPasswordCode(data: GenerateRefreshPasswordCodeRequest, resFn, errFn){
    this.post<GenerateRefreshPasswordCodeRequest>(false,this.generateRefreshPasswordCodeRoute, {}, data, resFn, errFn);
  }

  async checkRefreshPasswordCode(data: CheckRefreshPasswordCodeRequest, resFn, errFn){
    this.post<CheckRefreshPasswordCodeRequest>(false,this.checkRefreshPasswordCodeRoute, {}, data, resFn, errFn);
  }

  async refreshPassword(data: RefreshPasswordRequest, resFn, errFn){
    this.post<RefreshPasswordRequest>(false,this.refreshPasswordRoute, {}, data, resFn, errFn);
  }
  
  public refreshToken(request,next): Observable<HttpEvent<any>> {
    return this.post<any>(true, this.refreshTokenRoute, {}, {}, null, null, true).pipe(
      map((res: any) => {
        this.setToken(res.data);
        return next.handle(request);
      }),
    );
  }

  public logout(){
    console.log(AuthService.name + ' - logout');
    this.localStorage.removeToken()
    this.localStorage.removeUser()
    this.clearUser()
    // this.post(true,this.logoutRoute,{},{},(res) => {
    //   this.localStorage.removeToken();
    // }, (err) => {
    //   this.localStorage.removeToken();
    // });
  }

}

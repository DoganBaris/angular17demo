import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
// import { Token } from '../../common/model/token/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  getToken() {
    // const tokenModel = JSON.parse(localStorage.getItem('tokenModel') || '{}') as Token
    // return tokenModel.token;
    if (environment.tokenStoreActive) {
      return localStorage.getItem('token');
    }
    else {
      return sessionStorage.getItem('token');
    }
  }
}
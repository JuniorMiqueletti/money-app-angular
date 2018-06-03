import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { JwtHelper } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private http: Http,
    private jwtHelper: JwtHelper
  ) {
    this.loadToken();
   }

  login(user: string, passworkd: string): Promise<void> {

    const headers = new Headers;
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const body = `username=${user}&password=${passworkd}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
          .toPromise()
          .then(response => {
            this.storageToken(response.json().access_token);
          })
          .catch(response => {
            if (response.status === 400) {
              const responseJson = response.json();

              if (responseJson.error === 'invalid_grant') {
                return Promise.reject('Invalid user and/or password.');
              }
            }

            return Promise.reject(response);
          });
  }

  hasPermission(permission: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permission);
  }

  private storageToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private loadToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.storageToken(token);
    }
  }
}

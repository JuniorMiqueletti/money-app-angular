import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  oauthTokenUrl: string;
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    this.loadToken();
    this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
   }

  login(user: string, passworkd: string): Promise<void> {

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy')
      .append('Content-Type', 'application/x-www-form-urlencoded');

    const body = `username=${user}&password=${passworkd}&grant_type=password`;

    return this.http.post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true })
          .toPromise()
          .then(response => {
            this.storageToken(response.access_token);
          })
          .catch(response => {
            if (response.status === 400) {
              if (response.error === 'invalid_grant') {
                return Promise.reject('Invalid user and/or password.');
              }
            }

            return Promise.reject(response);
          });
  }

  hasPermission(permission: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permission);
  }

  hasAnyPermission(roles) {
    for (const role of roles) {
      if (this.hasPermission(role)) {
        return true;
      }
    }

    return false;
  }

  clearAcessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  isAcessTokenInvalid() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  getNewAccessToken(): Promise<void> {
    const body = 'grant_type=refresh_token';

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy')
      .append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.storageToken(response.access_token);

        console.log('New access token generatade.');
        return Promise.resolve(null);
      })
      .catch(response => {
        console.log('Error to get new token.', response);
        return Promise.resolve(null);
      });
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

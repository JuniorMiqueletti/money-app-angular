import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  constructor(
    private http: Http
  ) { }

  login(user: string, passworkd: string): Promise<void> {

    const headers = new Headers;
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const body = `username=${user}&password=${passworkd}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
          .toPromise()
          .then(response => {
            console.log(response);
          })
          .catch(response => {
            console.log(response);
          });
  }

}

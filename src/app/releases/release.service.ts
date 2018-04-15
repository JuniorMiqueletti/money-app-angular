import { Injectable, Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReleaseService {

  releasesUrl = 'http://localhost:8080/release';

  constructor(private http: Http) { }

  search(): Promise<any> {

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    return this.http.get(`${this.releasesUrl}?summary`, { headers })
      .toPromise()
      .then( response => response.json().content );
  }

}

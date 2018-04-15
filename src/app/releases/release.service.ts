import { Injectable, Component } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export interface ReleaseFilter {
  description: string;
  dueDateFrom: Date;
  dueDateUntil: Date;
}

@Injectable()
export class ReleaseService {

  releasesUrl = 'http://localhost:8080/release';

  constructor(private http: Http) { }

  search(filter: ReleaseFilter): Promise<any> {

    const params = new URLSearchParams();

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    if (filter.description) {
      params.set('description', filter.description);
    }
    if (filter.dueDateFrom) {
      params.set('dueDateFrom',
        moment(filter.dueDateFrom).format('YYYY-MM-DD'));
    }
    if (filter.dueDateUntil) {
      params.set('dueDateUntil',
        moment(filter.dueDateUntil).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.releasesUrl}?summary`,
      { headers, search: params })
      .toPromise()
      .then( response => response.json().content );
  }

}

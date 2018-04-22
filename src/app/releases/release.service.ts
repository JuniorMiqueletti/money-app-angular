import { Injectable, Component } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class ReleaseFilter {
  description: string;
  dueDateFrom: Date;
  dueDateUntil: Date;
  page = 0;
  pageSize = 5;
}

@Injectable()
export class ReleaseService {

  releasesUrl = 'http://localhost:8080/release';

  constructor(private http: Http) { }

  search(filter: ReleaseFilter): Promise<any> {

    const params = new URLSearchParams();

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    params.set('page', filter.page.toString());
    params.set('size', filter.pageSize.toString());

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
      .then( response => {
        const responseJson = response.json();
        const releases = responseJson.content;

        const result = {
          releases: releases,
          total: responseJson.totalElements
        };

        return result;
      });
  }

  delete(id: number): Promise<void> {

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    return this.http.delete(`${this.releasesUrl}/${id}`,
      { headers })
      .toPromise()
      .then(() => null );
  }
}

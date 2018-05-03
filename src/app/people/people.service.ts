import { Injectable, Component } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class PeopleFilter {
  name: string;
  page = 0;
  pageSize = 5;
}

@Injectable()
export class PeopleService {

  PeopleUrl = 'http://localhost:8080/person';

  constructor(private http: Http) { }

  search(filter: PeopleFilter): Promise<any> {

    const params = new URLSearchParams();

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    params.set('page', filter.page.toString());
    params.set('size', filter.pageSize.toString());

    if (filter.name) {
      params.set('name', filter.name);
    }

    return this.http.get(this.PeopleUrl,
      { headers, search: params })
      .toPromise()
      .then( response => {
        const responseJson = response.json();
        const people = responseJson.content;

        const result = {
          people: people,
          total: responseJson.totalElements
        };

        return result;
      });
  }

  delete(id: number): Promise<void> {

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    return this.http.delete(`${this.PeopleUrl}/${id}`,
      { headers})
      .toPromise()
      .then(() => null );
  }
}

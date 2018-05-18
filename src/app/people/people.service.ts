import { Injectable, Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import * as moment from 'moment';

export class PeopleFilter {
  name: string;
  page = 0;
  pageSize = 5;
}

@Injectable()
export class PeopleService {

  peopleUrl = 'http://localhost:8080/person';

  constructor(private http: AuthHttp) { }

  search(filter: PeopleFilter): Promise<any> {

    const params = new URLSearchParams();

    params.set('page', filter.page.toString());
    params.set('size', filter.pageSize.toString());

    if (filter.name) {
      params.set('name', filter.name);
    }

    return this.http.get(this.peopleUrl,
      { search: params })
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

    return this.http.delete(`${this.peopleUrl}/${id}`)
      .toPromise()
      .then(() => null );
  }

  findAll(): Promise<any> {

    return this.http.get(this.peopleUrl)
      .toPromise()
      .then(response => response.json().content);
  }
}

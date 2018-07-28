import { Person } from './../core/model/person.model';
import { Injectable, Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

import { environment } from '../../environments/environment';

export class PeopleFilter {
  name: string;
  page = 0;
  pageSize = 5;
}

@Injectable()
export class PeopleService {

  peopleUrl: string;

  constructor(private http: AuthHttp) {
    this.peopleUrl = `${environment.apiUrl}/person`;
  }

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

  findById(id: number): Promise<Person> {

    return this.http.get(`${this.peopleUrl}/${id}`)
      .toPromise()
      .then(response => {
        const personResponse = response.json() as Person;

        return personResponse;
      });
  }

  update(person: Person): Promise<Person> {
    return this.http.put(`${this.peopleUrl}/${person.id}`,
        JSON.stringify(person))
      .toPromise()
      .then(response => {
        const personChanged = response.json() as Person;

        return personChanged;
      });
  }
  save(person: Person): Promise<Person> {
    return this.http.post(this.peopleUrl, JSON.stringify(person))
      .toPromise()
      .then(response => response.json());
  }
}

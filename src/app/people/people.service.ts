import { Injectable, Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { MoneyHttp } from './../security/money-http';
import { Person } from './../core/model/person.model';
import { environment } from '../../environments/environment';

export class PeopleFilter {
  name: string;
  page = 0;
  pageSize = 5;
}

@Injectable()
export class PeopleService {

  peopleUrl: string;

  constructor(private http: MoneyHttp) {
    this.peopleUrl = `${environment.apiUrl}/api/v1/person`;
  }

  search(filter: PeopleFilter): Promise<any> {

    let params = new HttpParams({
      fromObject: {
        page: filter.page.toString(),
        size: filter.pageSize.toString()
      }
    });

    if (filter.name) {
      params = params.append('name', filter.name);
    }

    return this.http.get<any>(this.peopleUrl,
      { params })
      .toPromise()
      .then( response => {
        const people = response.content;

        const result = {
          people: people,
          total: response.totalElements
        };

        return result;
      });
  }

  delete(id: number): Promise<void> {

    return this.http.delete(`${this.peopleUrl}/${id}`)
      .toPromise()
      .then(() => null );
  }

  findAll(): Promise<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl)
      .toPromise();
  }

  findById(id: number): Promise<Person> {

    return this.http.get<Person>(`${this.peopleUrl}/${id}`)
      .toPromise();
  }

  update(person: Person): Promise<Person> {
    return this.http.put<Person>(`${this.peopleUrl}/${person.id}`, person)
      .toPromise();
  }
  save(person: Person): Promise<Person> {
    return this.http.post<Person>(this.peopleUrl, person)
      .toPromise();
  }
}

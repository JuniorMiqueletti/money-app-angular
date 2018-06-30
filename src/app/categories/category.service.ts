import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';

@Injectable()
export class CategoryService {

  categoryUrl: string;

  constructor( private http: AuthHttp ) {
    this.categoryUrl = `${environment.apiUrl}/category`;
  }

  findAll(): Promise<any> {

    return this.http.get(this.categoryUrl)
      .toPromise()
      .then(response => response.json());
  }


}

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { MoneyHttp } from './../security/money-http';
import { environment } from './../../environments/environment';

@Injectable()
export class CategoryService {

  categoryUrl: string;

  constructor( private http: MoneyHttp ) {
    this.categoryUrl = `${environment.apiUrl}/category`;
  }

  findAll(): Promise<any> {

    return this.http.get(this.categoryUrl)
      .toPromise();
  }


}

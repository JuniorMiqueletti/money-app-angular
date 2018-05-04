import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {

  categoryUrl = 'http://localhost:8080/categories';

  constructor( private http: Http ) { }

  findAll(): Promise<any> {

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AZ21haWwuY29tOmFkbWlu');

    return this.http.get(this.categoryUrl, { headers })
      .toPromise()
      .then(response => response.json());
  }


}

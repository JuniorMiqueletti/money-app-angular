import { Injectable, Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

import { MoneyHttp } from './../security/money-http';
import { Release } from './../core/model/release.model';
import { environment } from '../../environments/environment';

export class ReleaseFilter {
  description: string;
  dueDateFrom: Date;
  dueDateUntil: Date;
  page = 0;
  pageSize = 5;
}

@Injectable()
export class ReleaseService {

  releasesUrl: string;

  constructor(private http: MoneyHttp) {
    this.releasesUrl = `${environment.apiUrl}/api/v1/release`;
  }

  search(filter: ReleaseFilter): Promise<any> {

    let params = new HttpParams({
      fromObject: {
        page: filter.page.toString(),
        size: filter.pageSize.toString()
      }
    });

    if (filter.description) {
      params = params.append('description', filter.description);
    }
    if (filter.dueDateFrom) {
      params = params.append('dueDateFrom',
        moment(filter.dueDateFrom).format('YYYY-MM-DD'));
    }
    if (filter.dueDateUntil) {
      params = params.append('dueDateUntil',
        moment(filter.dueDateUntil).format('YYYY-MM-DD'));
    }

    return this.http.get<any>(`${this.releasesUrl}?summary`,
      { params })
      .toPromise()
      .then( response => {
        const releases = response.content;

        const result = {
          releases: releases,
          total: response.totalElements
        };

        return result;
      });
  }

  delete(id: number): Promise<void> {

    return this.http.delete(`${this.releasesUrl}/${id}`)
      .toPromise()
      .then(() => null );
  }

  save(release: Release): Promise<Release> {

    return this.http.post<Release>(this.releasesUrl, release)
      .toPromise();
  }

  update(release: Release): Promise<Release> {

    return this.http.put<Release>(`${this.releasesUrl}/${release.id}`, release)
      .toPromise()
      .then(response => {
        const releaseChanged = response;

        this.convertString2Date([releaseChanged]);

        return releaseChanged;
      });
  }

  findById(id: number): Promise<Release> {

    return this.http.get<Release>(`${this.releasesUrl}/${id}`)
      .toPromise()
      .then(response => {
        const releaseResponse = response;

        this.convertString2Date([releaseResponse]);

        return releaseResponse;
      });
  }

  private convertString2Date(releases: Release[]) {
    for (const release of releases) {
      release.dueDate = moment(release.dueDate, 'YYYY-MM-DD')
        .toDate();

      if (release.payDate) {
        release.payDate = moment(release.payDate, 'YYYY-MM-DD')
          .toDate();
      }
    }
  }
}

import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';
import * as moment from 'moment';

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

  constructor(private http: AuthHttp) {
    this.releasesUrl = `${environment.apiUrl}/release`;
  }

  search(filter: ReleaseFilter): Promise<any> {

    const params = new URLSearchParams();

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
      { search: params })
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

    return this.http.delete(`${this.releasesUrl}/${id}`)
      .toPromise()
      .then(() => null );
  }

  save(release: Release): Promise<Release> {

    return this.http.post(this.releasesUrl, JSON.stringify(release))
    .toPromise()
    .then(response => response.json());

  }

  update(release: Release): Promise<Release> {

    return this.http.put(`${this.releasesUrl}/${release.id}`,
        JSON.stringify(release))
      .toPromise()
      .then(response => {
        const releaseChanged = response.json() as Release;

        this.convertString2Date([releaseChanged]);

        return releaseChanged;
      });
  }

  findById(id: number): Promise<Release> {

    return this.http.get(`${this.releasesUrl}/${id}`)
      .toPromise()
      .then(response => {
        const releaseResponse = response.json() as Release;

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

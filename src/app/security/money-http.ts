import { NotAuthenticatedError } from './../core/model/not-authenticated-error.model';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';

import { AuthConfig, AuthHttp, JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class MoneyHttp extends AuthHttp {

  constructor(
    private auth: AuthService,
    options: AuthConfig,
    http: Http, defOpts?: RequestOptions
  ) {
    super(options, http, defOpts);
  }

  public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.doRequest(() => super.delete(url, options));
  }

  public patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.doRequest(() => super.patch(url, options));
  }

  public head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.doRequest(() => super.head(url, options));
  }

  public options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.doRequest(() => super.options(url, options));
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.doRequest(() => super.get(url, options));
  }

  public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.doRequest(() => super.post(url, body, options));
  }

  public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.doRequest(() => super.put(url, body, options));
  }

  private doRequest(fn: Function): Observable<Response> {
    if (this.auth.isAcessTokenInvalid()) {
      console.log('HTTP request with access token invalid. Getting new token...');

      const newAccessTokenCall = this.auth.getNewAccessToken()
        .then(() => {

          if (this.auth.isAcessTokenInvalid()) {
            throw new NotAuthenticatedError();
          }

          return fn().toPromise();

        });

      return Observable.fromPromise(newAccessTokenCall);
    } else {
      return fn();
    }
  }

}

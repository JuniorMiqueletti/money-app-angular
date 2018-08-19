import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { Observable, from as observableFromPromise } from 'rxjs';

import { AuthService } from './auth.service';
import { NotAuthenticatedError } from './../core/model/not-authenticated-error.model';

@Injectable()
export class MoneyHttp extends HttpClient {

  constructor(
    private auth: AuthService,
    private httpHandler: HttpHandler
  ) {
    super(httpHandler);
  }

  public delete<T>(url: string, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.delete<T>(url, options));
  }

  public patch<T>(url: string, body: any, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.patch<T>(url, options));
  }

  public head<T>(url: string, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.head<T>(url, options));
  }

  public options<T>(url: string, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.options<T>(url, options));
  }

  public get<T>(url: string, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.get<T>(url, options));
  }

  public post<T>(url: string, body: any, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.post<T>(url, body, options));
  }

  public put<T>(url: string, body: any, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.put<T>(url, body, options));
  }

  private doRequest<T>(fn: Function): Observable<T> {
    if (this.auth.isAcessTokenInvalid()) {
      console.log('HTTP request with access token invalid. Getting new token...');

      const newAccessTokenCall = this.auth.getNewAccessToken()
        .then(() => {

          if (this.auth.isAcessTokenInvalid()) {
            throw new NotAuthenticatedError();
          }

          return fn().toPromise();

        });

      return observableFromPromise(newAccessTokenCall);
    } else {
      return fn();
    }
  }

}

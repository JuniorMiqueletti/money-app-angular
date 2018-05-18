import { Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestOptions } from '@angular/http';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { LoginComponent } from './login/login.component';
import { SecurityRoutingModule } from './security-routing.module';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  const config = new AuthConfig({
    globalHeaders: [
      { 'Content-Type': 'application/json' }
    ]
  });

  return new AuthHttp(config, http, options);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,

    SecurityRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class SecurityModule { }

import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { JwtHelperService } from '@auth0/angular-jwt';

import { MoneyHttp } from './../security/money-http';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { ReleaseService } from '.././releases/release.service';
import { PeopleService } from '.././people/people.service';
import { CategoryService } from './../categories/category.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './../security/auth.service';
import { UnauthorizedPageComponent } from './unauthorized-page/unauthorized-page.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ConfirmDialogModule,
    ToastModule
  ],
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
    UnauthorizedPageComponent,
  ],
  exports: [
    NavbarComponent,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [
    MessageService,
    CategoryService,
    ReleaseService,
    PeopleService,
    ErrorHandlerService,
    ConfirmationService,
    Title,
    AuthService,
    JwtHelperService,
    MoneyHttp,
    { provide: LOCALE_ID, useValue: 'en-US' }
  ]
})
export class CoreModule { }

import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { JwtHelper } from 'angular2-jwt';

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
    RouterModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule
  ],
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
    UnauthorizedPageComponent,
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    CategoryService,
    ReleaseService,
    PeopleService,
    ErrorHandlerService,
    ConfirmationService,
    Title,
    AuthService,
    JwtHelper,
    { provide: LOCALE_ID, useValue: 'en-US' }
  ]
})
export class CoreModule { }

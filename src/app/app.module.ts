import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ReleaseService } from './releases/release.service';
import { PeopleService } from './people/people.service';
import { ReleasesModule } from './releases/releases.module';
import { PeopleModule } from './people/people.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    CoreModule,
    ReleasesModule,
    PeopleModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule
  ],
  providers: [
    ReleaseService,
    PeopleService,
    ConfirmationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

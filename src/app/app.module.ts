import { ReleaseService } from './releases/release.service';
import { PeopleService } from './people/people.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ReleasesModule } from './releases/releases.module';
import { PeopleModule } from './people/people.module';
import { HttpModule } from '@angular/http';

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
    PeopleModule
  ],
  providers: [
    ReleaseService,
    PeopleService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

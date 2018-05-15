import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ReleasesModule } from './releases/releases.module';
import { PeopleModule } from './people/people.module';
import { AppRoutingModule } from './app-routing.module';
import { SecurityModule } from './security/security.module';

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
    SecurityModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReleasesModule } from './releases/releases.module';
import { PeopleModule } from './people/people.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ReleasesModule,
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

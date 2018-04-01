import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';

import { ReleasesSeachComponent } from './releases-seach/releases-seach.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleSeachComponent } from './people-seach/people-seach.component';
import { ReleaseRegisterComponent } from './release-register/release-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ReleasesSeachComponent,
    NavbarComponent,
    PeopleSeachComponent,
    ReleaseRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

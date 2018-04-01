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
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';

import { ReleasesSeachComponent } from './releases-seach/releases-seach.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleSeachComponent } from './people-seach/people-seach.component';
import { ReleaseRegisterComponent } from './release-register/release-register.component';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { PersonRegisterComponent } from './person-register/person-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ReleasesSeachComponent,
    NavbarComponent,
    PeopleSeachComponent,
    ReleaseRegisterComponent,
    PersonRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

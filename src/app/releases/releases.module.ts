import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { ReleasesRoutingModule } from './releases-routing.module';
import { ReleaseRegisterComponent } from './release-register/release-register.component';
import { ReleasesSearchComponent } from './releases-search/releases-search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,

    CurrencyMaskModule,

    SharedModule,
    ReleasesRoutingModule
  ],
  declarations: [
    ReleaseRegisterComponent,
    ReleasesSearchComponent
    ],
  exports: []
})
export class ReleasesModule { }

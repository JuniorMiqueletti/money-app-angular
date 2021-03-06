import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { TooltipModule } from 'primeng/tooltip';

import { PeopleRegisterComponent } from './people-register/people-register.component';
import { PeopleSearchComponent } from './people-search/people-search.component';
import { SharedModule } from '../shared/shared.module';
import { PeopleRoutingModule } from './people-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputMaskModule,

    SharedModule,
    PeopleRoutingModule
  ],
  declarations: [
    PeopleRegisterComponent,
    PeopleSearchComponent
  ],
  exports: []
})
export class PeopleModule { }

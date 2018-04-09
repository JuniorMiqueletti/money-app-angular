import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { TooltipModule } from 'primeng/tooltip';
import { PersonRegisterComponent } from './person-register/person-register.component';
import { PeopleGridComponent } from './people-grid/people-grid.component';
import { PeopleSeachComponent } from './people-seach/people-seach.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputMaskModule,

    SharedModule
  ],
  declarations: [
    PersonRegisterComponent,
    PeopleSeachComponent,
    PeopleGridComponent
  ],
  exports: [
    PersonRegisterComponent,
    PeopleSeachComponent
  ]
})
export class PeopleModule { }

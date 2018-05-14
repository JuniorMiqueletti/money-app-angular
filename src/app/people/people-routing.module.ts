import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PeopleRegisterComponent } from './people-register/people-register.component';
import { PeopleGridComponent } from './people-grid/people-grid.component';
import { PeopleSearchComponent } from './people-search/people-search.component';

const routes: Routes = [
    { path: 'people', component: PeopleSearchComponent },
    { path: 'people/new', component: PeopleRegisterComponent },
    { path: 'people/:id', component: PeopleRegisterComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class PeopleRoutingModule { }

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ReleaseRegisterComponent } from './release-register/release-register.component';
import { ReleasesSearchComponent } from './releases-search/releases-search.component';

const routes: Routes = [
    { path: 'releases', component: ReleasesSearchComponent },
    { path: 'releases/new', component: ReleaseRegisterComponent },
    { path: 'releases/:id', component: ReleaseRegisterComponent }
  ];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class ReleasesRoutingModule { }

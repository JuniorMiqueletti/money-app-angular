import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ReleaseRegisterComponent } from './release-register/release-register.component';
import { ReleasesSearchComponent } from './releases-search/releases-search.component';
import { AuthGuard } from './../security/auth.guard';

const routes: Routes = [
    {
       path: 'releases',
       component: ReleasesSearchComponent,
       canActivate: [AuthGuard],
       data: { roles: ['ROLE_SEARCH_RELEASE'] }
    },
    {
      path: 'releases/new',
      component: ReleaseRegisterComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CREATE_RELEASE'] }
    },
    {
      path: 'releases/:id',
      component: ReleaseRegisterComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CREATE_RELEASE'] }
    }
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

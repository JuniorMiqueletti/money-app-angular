import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleasesSearchComponent } from './releases/releases-search/releases-search.component';
import { ReleaseRegisterComponent } from './releases/release-register/release-register.component';
import { PeopleSearchComponent } from './people/people-search/people-search.component';
import { PeopleRegisterComponent } from './people/people-register/people-register.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'releases', pathMatch: 'full' },
    { path: 'releases', component: ReleasesSearchComponent },
    { path: 'releases/new', component: ReleaseRegisterComponent },
    { path: 'releases/:id', component: ReleaseRegisterComponent },
    { path: 'people', component: PeopleSearchComponent },
    { path: 'people/new', component: PeopleRegisterComponent },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
  })
  export class AppRoutingModule { }

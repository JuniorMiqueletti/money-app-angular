import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { UnauthorizedPageComponent } from './core/unauthorized-page/unauthorized-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: 'unauthorized-page', component: UnauthorizedPageComponent},
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

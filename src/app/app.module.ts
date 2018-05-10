import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ReleasesModule } from './releases/releases.module';
import { PeopleModule } from './people/people.module';
import { ReleasesSearchComponent } from './releases/releases-search/releases-search.component';
import { ReleaseRegisterComponent } from './releases/release-register/release-register.component';
import { PeopleSearchComponent } from './people/people-search/people-search.component';
import { PeopleRegisterComponent } from './people/people-register/people-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'releases', pathMatch: 'full' },
  { path: 'releases', component: ReleasesSearchComponent },
  { path: 'releases/new', component: ReleaseRegisterComponent },
  { path: 'releases/:id', component: ReleaseRegisterComponent },
  { path: 'people', component: PeopleSearchComponent },
  { path: 'people/new', component: PeopleRegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),

    CoreModule,
    ReleasesModule,
    PeopleModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

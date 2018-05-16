import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { LoginComponent } from './login/login.component';
import { SecurityRoutingModule } from './security-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,

    SecurityRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class SecurityModule { }

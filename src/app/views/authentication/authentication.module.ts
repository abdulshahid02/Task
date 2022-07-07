import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {RouterModule} from '@angular/router';
import {AuthenticationRoutes} from './authentication.routing';
import {SharedModule} from '../../shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {SharedMaterialModule} from '../../shared/shared-material.module';
import { LoginForm2Component } from './login-form2/login-form2.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, LoginForm2Component],
  imports: [
    CommonModule,
    SharedModule,
    SharedMaterialModule,
    // MatCardModule,
    MatFormFieldModule,
    RouterModule.forChild(AuthenticationRoutes)
  ]
})

export class AuthenticationModule { }

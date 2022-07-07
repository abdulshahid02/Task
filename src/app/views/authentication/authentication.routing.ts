import { Routes } from "@angular/router";
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { LoginForm2Component } from './login-form2/login-form2.component';

export const AuthenticationRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "login2",
    component: LoginForm2Component,
  },
  {
    path: "signup",
    component: SignupComponent,
  },

];

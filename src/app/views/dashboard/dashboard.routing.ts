import { Routes } from "@angular/router";

import { DefaultDashboardComponent } from "./default-dashboard/default-dashboard.component";
import {Dashboard2Component} from './dashboard2/dashboard2.component';

export const DashboardRoutes: Routes = [
  {
    path: "dashboard",
    component: DefaultDashboardComponent,
  },
  {
    path: "dashboard2",
    component: Dashboard2Component,
  },

];

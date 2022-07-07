import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard';
const AppRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

export const routesConfig: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },

      {
        path: 'charts',
        loadChildren: () => import('./views/chart/charts.module').then(m => m.ChartsModule)
      },

    ]
  },
  {
    path: 'authentication',
    loadChildren: () => import('./views/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDashboardComponent } from './default-dashboard/default-dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routing';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [DefaultDashboardComponent, Dashboard2Component],
  imports: [
    CommonModule,
    SharedModule, HttpClientModule, MatCheckboxModule,
    MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatCardModule, MatTableModule,
    MatButtonModule, MatIconModule,
    MatDividerModule, NgxEchartsModule,
    NgxEchartsModule.forRoot({
      echarts: { init: echarts.init }
    }),
    RouterModule.forChild(DashboardRoutes),

  ],
})
export class DashboardModule { }

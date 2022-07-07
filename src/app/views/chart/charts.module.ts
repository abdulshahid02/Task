import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
// import {ChartsRoutes} from './charts.routing';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import {HttpClientModule} from '@angular/common/http';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [ LineComponent, BarComponent, PieComponent],
  imports: [
    CommonModule,
    SharedModule,HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,NgxEchartsModule,
    NgxEchartsModule.forRoot({
      echarts: { init: echarts.init }
 }),
    // RouterModule.forChild(ChartsRoutes),

    ],
})
export class ChartsModule { }

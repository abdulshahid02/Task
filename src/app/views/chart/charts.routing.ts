import { Routes } from "@angular/router";

import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';

export const ChartsRoutes: Routes = [
  {
    path: "bar",
    component: BarComponent,
  },
  {
    path: "line",
    component: LineComponent,
  },
  {
    path: "pie",
    component: PieComponent,
  },

];

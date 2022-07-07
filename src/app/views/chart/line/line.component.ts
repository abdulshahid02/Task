import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  private myChart: any = null;

  initOpts = {
   renderer: 'svg',
   // width: 300,
   height: 300
 };
 
 optionLine = {
   xAxis: {
       type: 'category',
       boundaryGap: false,
       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
   },
   yAxis: {
       type: 'value'
   },
   series: [{
       data: [820, 932, 901, 934, 1290, 1330, 1320],
       type: 'line',
       areaStyle: {}
   }]
};

 isLoading = false;
 options2 = {
   tooltip: {
     trigger: 'axis',
     axisPointer: {
       type: 'cross',
       label: {
         backgroundColor: '#6a7985'
       }
     }
   },
   legend: {
     data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5']
   },
   grid: {
     left: '3%',
     right: '4%',
     bottom: '3%',
     containLabel: true
   },
   xAxis: [
     {
       type: 'category',
       boundaryGap: false,
       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
     }
   ],
   yAxis: [
     {
       type: 'value'
     }
   ],
   series: [
     {
       name: 'X-1',
       type: 'line',
       stack: 'counts',
       areaStyle: { normal: {} },
       data: [120, 132, 101, 134, 90, 230, 210]
     },
     {
       name: 'X-2',
       type: 'line',
       stack: 'counts',
       areaStyle: { normal: {} },
       data: [220, 182, 191, 234, 290, 330, 310]
     },
     {
       name: 'X-3',
       type: 'line',
       stack: 'counts',
       areaStyle: { normal: {} },
       data: [150, 232, 201, 154, 190, 330, 410]
     },
     {
       name: 'X-4',
       type: 'line',
       stack: 'counts',
       areaStyle: { normal: {} },
       data: [320, 332, 301, 334, 390, 330, 320]
     },
     {
       name: 'X-5',
       type: 'line',
       stack: 'counts',
       label: {
         normal: {
           show: true,
           position: 'top'
         }
       },
       areaStyle: { normal: {} },
       data: [1220, 932, 901, 934, 1290, 1330, 1020]
     }
   ]
 };

 optionBasic = {
  xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
  }]
};

optionStackLine = {
  // title: {
  //     text: 'Stacked Line Chart'
  // },
  tooltip: {
      trigger: 'axis'
  },
  legend: {
      data: ['X1', 'X2', 'X3', 'X4', 'X5']
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  // toolbox: {
  //     feature: {
  //         saveAsImage: {}
  //     }
  // },
  xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [
      {
          name: 'X1',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
          name: 'X2',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
          name: 'X3',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
          name: 'X4',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
          name: 'X5',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
  ]
};

 ngOnInit(): void {

 }

}

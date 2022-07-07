import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
    name = 'Angular';

    private myChart: any = null;

   initOpts = {
    renderer: 'svg',
    // width: 300,
    height: 300
  };

  optionCustomizedPie = {
    backgroundColor: '#2c343c',

    title: {
        // text: 'Customized Pie',
        // left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 335, name: 'Get'},
                {value: 310, name: 'Post'},
                {value: 274, name: 'Delete'},
                {value: 235, name: 'Update'},
                {value: 400, name: 'Patch'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

  optionDpie = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
            bottom: 10,
            left: 'center',
        data: ['Get', 'Post', 'Patch', 'Delete', 'Update']
    },
    series: [
        {
            name: 'REQUEST',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: 'Get'},
                {value: 310, name: 'Post'},
                {value: 234, name: 'Patch'},
                {value: 135, name: 'Delete'},
                {value: 548, name: 'Update'}
            ]
        }
    ]
};

  optionPie = {
    // title: {
    //    text: 'Pie Chart',
      
    //     left: 'center'
    // },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['User1', 'User2', 'User3', 'User4', 'User5']
    },
    series: [
        {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
               {value: 505, name: 'User5'},
                {value: 535, name: 'User4'},
                {value: 510, name: 'User3'},
                {value: 634, name: 'User2'},
                {value: 735, name: 'User1'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

  options3  = {
    // title: {
    //     text: '南丁格尔玫瑰图',
    //     subtext: '纯属虚构',
    //     left: 'center'
    // },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['Rose1', 'Rose2', 'Rose3', 'Rose4', 'Rose5']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                // show: true,
                // type: ['pie', 'funnel']
            },
            // restore: {show: true},
            // saveAsImage: {show: true}
        }
    },
    series: [
   
        {
            name: 'Type',
            type: 'pie',
            radius: [30, 130],
            center: ['50%', '50%'],
            roseType: 'area',
            data: [
                {value: 10, name: 'Rose1'},
                {value: 5, name: 'Rose2'},
                {value: 15, name: 'Rose3'},
                {value: 25, name: 'Rose4'},
                {value: 20, name: 'Rose5'},
            ]
        }
    ]
};

  

  ngOnInit() {
  }

    }
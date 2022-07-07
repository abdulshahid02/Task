import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

 options: any=null;
 options1 = {
   color: ['#3398DB'],
   tooltip: {
     trigger: 'axis',
     axisPointer: {
       type: 'shadow'
     }
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
       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
       axisTick: {
         alignWithLabel: true
       }
     }
   ],
   yAxis: [{
     type: 'value'
   }],
   series: [{
     name: 'Counters',
     type: 'bar',
     barWidth: '60%',
     data: [10, 52, 200, 334, 390, 330, 220]
   }]
 };
 isLoading = false;

 optionsRadar = {
 //   title: {
 //     text: 'priority vs testing type'
 // },
 tooltip: {},
 legend: {
     data: ['Priority', 'Testing']
 },
 radar: {
     // shape: 'circle',
     name: {
         textStyle: {
             color: '#fff',
             backgroundColor: '#999',
             borderRadius: 3,
             padding: [3, 5]
        }
     },
     indicator: [
        { name: 'Critical', max: 6500},
        { name: 'High', max: 16000},
        { name: 'Medium', max: 30000},
        { name: 'Less', max: 38000},
        { name: 'Low', max: 52000},
     ]
 },
 series: [{
     // name: 'priority vs testing',
     type: 'radar',
     // areaStyle: {normal: {}},
     data : [
         {
             value : [4300, 10000, 28000, 35000, 50000, 19000],
             name : 'Functional testing'
         },
          {
             value : [5000, 14000, 28000, 31000, 42000, 21000],
             name : 'String testing'
         }
     ]
 }]
 };


optionHBarChart = {
  dataset: {
    source: [
        ['score', 'amount', 'product'],
        [89.3, 58212, 'Matcha Latte'],
        [57.1, 78254, 'Milk Tea'],
        [74.4, 41032, 'Cheese Cocoa'],
        [50.1, 12755, 'Cheese Brownie'],
        [89.7, 20145, 'Matcha Cocoa'],
        [68.1, 79146, 'Tea'],
        [19.6, 91852, 'Orange Juice'],
        [10.6, 101852, 'Lemon Juice'],
        [32.7, 20112, 'Walnut Brownie']
    ]
},
grid: {containLabel: true},
xAxis: {name: 'amount'},
yAxis: {type: 'category'},
// visualMap: {
//     orient: 'horizontal',
//     left: 'center',
//     min: 10,
//     max: 100,
//     text: ['High Score', 'Low Score'],
//     // Map the score column to color
//     dimension: 0,
//     inRange: {
//         color: ['#D7DA8B', '#E15457']
//     }
// },
series: [
    {
        type: 'bar',
        encode: {
            // Map the "amount" column to X axis.
            x: 'amount',
            // Map the "product" column to Y axis
            y: 'product'
        }
    }
]
};

 data = [
   {
     _id: "5c78cb7d91b1f1bf5aaa0973",
     taskID: "S4HT-001",
     taskName: "Create an Innovation Strategy and a High-Level Road Map",
     priority: 3,
     phase: "Discover",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "2019-03-09T18:07:34.910Z",
     plannedTo: "2019-03-14T11:10:49.021Z",
     startedOn: "2019-03-21T11:40:24.485Z",
     completedOn: "2019-03-21T11:40:24.485Z",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: null,
     actualSprint: null,
     description: "Description",
     participants: [],
     refTaskID: "",
     acceptanceCriteria: null,
     actualEnvironment: null,
     plannedEnvironment: null,
     subPhase: "Strategic Planning",
     assignedTo: "VB",
     status: "Active"
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa097d",
     taskID: "S4HT-002",
     taskName: "Check the Conversion Readiness of SAP ERP",
     priority: 3,
     phase: "Discover",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "2019-03-21T10:32:37.020Z",
     plannedTo: "2019-03-28T10:32:39.844Z",
     startedOn: "2019-03-21T10:46:35.105Z",
     completedOn: "2019-03-21T10:46:35.105Z",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: null,
     actualSprint: null,
     description: "",
     participants: [],
     refTaskID: "",
     acceptanceCriteria: null,
     actualEnvironment: null,
     plannedEnvironment: null,
     subPhase: "Application Value and Scoping",
     assignedTo: "VB",
     status: "Completed"
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09d6",
     taskID: "S4HT-003",
     taskName: "Review Deliverables of Explore Phase",
     priority: 1,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "KTern",
     angularRoute: "/pages/project-hub/timeline/overview",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "2019-03-12T20:33:11.159Z",
     plannedTo: "2019-03-19T20:33:14.167Z",
     startedOn: "2019-03-21T12:30:20.638Z",
     completedOn: "",
     kternModule: ["Project Management"],
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: null,
     actualSprint: null,
     description: "",
     participants: [],
     refTaskID: "",
     acceptanceCriteria: null,
     actualEnvironment: null,
     plannedEnvironment: "AEQ",
     assignedTo: "VB",
     status: "Active"
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09d7",
     taskID: "S4HT-004",
     taskName: "Review Acceptance Criteria",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Phase Initiation",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09d8",
     taskID: "S4HT-005",
     taskName: "Review RACI Chart for Explore Phase",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Phase Initiation",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09d9",
     taskID: "S4HT-006",
     taskName: "Develop a Training Concept",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "KTern",
     angularRoute: "/pages/modules/training-launchpad/training-workshops",
     apiURL: "activate/training-autorecommendations",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: ["Training Hub"],
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Learning Design",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09da",
     taskID: "S4HT-007",
     taskName: "Finalize Mandatory System Preparation Activities",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Activate Solution",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09db",
     taskID: "S4HT-008",
     taskName: "Present fit-gap/delta design overview",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Fit-Gap / Delta Design: Introduction",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09dc",
     taskID: "S4HT-009",
     taskName:
       "Optimize your business process in SAP S/4HANA by considering the delta scope with respect to SAP ERP",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "KTern",
     angularRoute: "/pages/phase/result/5c78cb7d91b1f1bf5aaa09dc",
     apiURL: "activate/fit-gap-analysis-highlight",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: ["Impact Analysis", "Business Process Optimization"],
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: "5c78cb7d91b1f1bf5aaa09db",
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Fit-Gap / Delta Design: Introduction",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09dd",
     taskID: "S4HT-0010",
     taskName: "Prepare sample data",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Fit-Gap / Delta Design: Finalize System Setup",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09de",
     taskID: "S4HT-011",
     taskName: "Enhance system setup with additional configuration",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Fit-Gap / Delta Design: Finalize System Setup",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09df",
     taskID: "S4HT-012",
     taskName: "Run Fit Gap Workshops",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase:
       "Fit-Gap / Delta Design: Fit/Gap Analysis - Solution Validation",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa097c",
     taskID: "S4HT-013",
     taskName: "Perform simplification item checks",
     priority: 3,
     phase: "Discover",
     createdOn: "",
     createdBy: "KTern",
     taskType: "KTern",
     angularRoute: "/pages/phase/result/5c78cb7d91b1f1bf5aaa097c",
     apiURL: "activate/simplification-item-impact",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: ["Impact Analysis"],
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: "5c78cb7d91b1f1bf5aaa097d",
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Application Value and Scoping",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09e0",
     taskID: "S4HT-014",
     taskName: "GAP Documentation / Specification",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Fit-Gap / Delta Design: Gap Identification",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09e1",
     taskID: "S4HT-015",
     taskName:
       "Enhance your business process in S/4HANA by running fit-gap analysis",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "KTern",
     angularRoute: "/pages/phase/result/5c78cb7d91b1f1bf5aaa09e1",
     apiURL: "activate/fit-gap-analysis-system-study",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: ["Impact Analysis", "Business Process Optimization"],
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: "5c78cb7d91b1f1bf5aaa09e0",
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Fit-Gap / Delta Design: Gap Identification",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09e2",
     taskID: "S4HT-016",
     taskName: "Prioritize Delta Scope",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Fit-Gap / Delta Design: Delta Scope Prioritization",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09e3",
     taskID: "S4HT-017",
     taskName: "Validate Gaps",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "GAP Validation",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09e4",
     taskID: "S4HT-018",
     taskName: "Finalize Delta Design",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "Suwanee, US",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Fit-Gap / Delta Design: Delta Design",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09e5",
     taskID: "S4HT-019",
     taskName: "Perform Design Review",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "Suwanee, US",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Design Review",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09e6",
     taskID: "S4HT-020",
     taskName: "Perform Validation and Approval Sessions",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "Fit-Gap / Delta Design: Verify and Accept",
     status: "New",
     assignedTo: ""
   },
   {
     _id: "5c78cb7d91b1f1bf5aaa09e7",
     taskID: "S4HT-021",
     taskName: "UX Activation",
     priority: 3,
     phase: "Explore",
     createdOn: "",
     createdBy: "KTern",
     taskType: "",
     angularRoute: "",
     apiURL: "",
     assignedBy: "",
     assignedToTeam: "",
     plannedFrom: "",
     plannedTo: "",
     startedOn: "",
     completedOn: "",
     kternModule: "",
     plannedLocation: "",
     actualLocation: "",
     plannedSprint: "",
     actualSprint: "",
     description: "",
     participants: "",
     refTaskID: null,
     actualEnvironment: "",
     plannedEnvironment: "",
     subPhase: "UX Activation and Design",
     status: "New",
     assignedTo: ""
   }
 ];
 
 optionBar = {
  legend: {},
  tooltip: {},
  dataset: {
      source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', 43.3, 85.8, 93.7],
          ['Milk Tea', 83.1, 73.4, 55.1],
          ['Cheese Cocoa', 86.4, 65.2, 82.5],
          ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
  },
  xAxis: {type: 'category'},
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
      {type: 'bar'},
      {type: 'bar'},
      {type: 'bar'}
  ]
};

weatherIcons = {};

seriesLabel = {
  normal: {
      show: true,
      textBorderColor: '#333',
      textBorderWidth: 2
  }
}

optionHBar = {

  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  legend: {
      data: ['City Alpha', 'City Beta', 'City Gamma']
  },
  grid: {
      left: 100
  },
  toolbox: {
      show: true,
      feature: {
          saveAsImage: {}
      }
  },
  xAxis: {
      type: 'value',
      name: 'Days',
      axisLabel: {
          formatter: '{value}'
      }
  },
  yAxis: {
      type: 'category',
      inverse: true,
      data: ['Sunny', 'Cloudy', 'Showers'],
      axisLabel: {
          formatter: function (value) {
              return '{' + value + '| }\n{value|' + value + '}';
          },
          margin: 20,
          rich: {
              value: {
                  lineHeight: 30,
                  align: 'center'
              },
              Sunny: {
                  height: 40,
                  align: 'center',
              },
              Cloudy: {
                  height: 40,
                  align: 'center',
              },
              Showers: {
                  height: 40,
                  align: 'center',
              }
          }
      }
  },
  series: [
      {
          name: 'City Alpha',
          type: 'bar',
          data: [165, 170, 30],
          label: this.seriesLabel,
          markPoint: {
              symbolSize: 1,
              symbolOffset: [0, '50%'],
              label: {
                  formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                  backgroundColor: 'rgb(242,242,242)',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  padding: [4, 10],
                  lineHeight: 26,
                  // shadowBlur: 5,
                  // shadowColor: '#000',
                  // shadowOffsetX: 0,
                  // shadowOffsetY: 1,
                  position: 'right',
                  distance: 20,
                  rich: {
                      a: {
                          align: 'center',
                          color: '#fff',
                          fontSize: 18,
                          textShadowBlur: 2,
                          textShadowColor: '#000',
                          textShadowOffsetX: 0,
                          textShadowOffsetY: 1,
                          textBorderColor: '#333',
                          textBorderWidth: 2
                      },
                      b: {
                          color: '#333'
                      },
                      c: {
                          color: '#ff8811',
                          textBorderColor: '#000',
                          textBorderWidth: 1,
                          fontSize: 22
                      }
                  }
              },

          }
      },
      {
          name: 'City Beta',
          type: 'bar',
          label: this.seriesLabel,
          data: [150, 105, 110]
      },
      {
          name: 'City Gamma',
          type: 'bar',
          label: this.seriesLabel,
          data: [220, 82, 63]
      }
  ]
};

 ngOnInit(): void {

 }

}
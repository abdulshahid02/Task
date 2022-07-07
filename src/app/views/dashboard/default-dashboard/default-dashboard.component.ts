import * as echarts from 'echarts';
import { graphic } from 'echarts';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HandlerService } from '../../../shared/services/handler.service';
import {
  Component,
  ViewChild,
  ViewChildren, OnInit,
  QueryList,
  ChangeDetectorRef,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { CarTableDataService } from '../car-table-data.service';

@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default-dashboard.component.html',
  styleUrls: ['./default-dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})

export class DefaultDashboardComponent implements OnInit {

  Users = [

    {
      name: 'Eugene',
      email: 'eugene@test.com',
      phone: '8786541234',
    },
    {
      name: 'Jason',
      email: 'jason@test.com',
      phone: '7856452187',
    },
  ];

  columnsToDisplay = [
    'select',
    'name',
    'weight',
    'symbol',
    'position',
    'action',
  ];
  expandedElement: PeriodicElement | null;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

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
    // legend: {
    //   data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5']
    // },
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
        // name: 'X-1',
        type: 'line',
        stack: 'counts',
        // areaStyle: { normal: {} },
        data: [120, 132, 101, 134, 90, 230, 210]
      },

    ]
  };



  show = false; // add one more property

  public dataSourceTable = new MatTableDataSource<any | Group>([]);

  columns: any[];
  displayedColumns: string[];
  groupByColumns: string[] = [];
  allData: any[];
  _allGroup: any[];

  expandedCar: any[] = [];
  expandedSubCar: Car[] = [];

  @ViewChild(MatSort) sort: MatSort;

  constructor(protected dataSourceService: CarTableDataService, private handler: HandlerService, private cdRef: ChangeDetectorRef) {
    this.columns = [
      {
        field: 'id',
      },
      {
        field: 'vin',
      },
      {
        field: 'brand',
      },
      {
        field: 'year',
      },
      {
        field: 'color',
      },
    ];
    this.displayedColumns = this.columns.map((column) => column.field);
    this.groupByColumns = ['brand'];
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  // public dataSourceTable = new MatTableDataSource<any | Group>([]);

  // columns: any[];
  // displayedColumns: string[];
  // groupByColumns: string[] = [];
  // allData: any[];
  // _allGroup: any[];

  // expandedCar: any[] = [];
  // expandedSubCar: Car[] = [];

  // @ViewChild(MatSort) sort: MatSort;



  ngOnInit() {
    this.dataSourceService.getAllData().subscribe(
      (data: any) => {
        data.data.forEach((item, index) => {
          item.id = index + 1;
        });
        this.allData = data.data;
        this.dataSourceTable.data = this.getGroups(
          this.allData,
          this.groupByColumns
        );
      },
      (err: any) => console.log(err)
    );
  }

  groupHeaderClick(row) {
    if (row.expanded) {
      row.expanded = false;
      this.dataSourceTable.data = this.getGroups(
        this.allData,
        this.groupByColumns
      );
    } else {
      row.expanded = true;
      this.expandedCar = row;
      this.dataSourceTable.data = this.addGroupsNew(
        this._allGroup,
        this.allData,
        this.groupByColumns,
        row
      );
    }
  }

  getGroups(data: any[], groupByColumns: string[]): any[] {
    const rootGroup = new Group();
    rootGroup.expanded = false;
    return this.getGroupList(data, 0, groupByColumns, rootGroup);
  }

  getGroupList(
    data: any[],
    level: number = 0,
    groupByColumns: string[],
    parent: Group
  ): any[] {
    if (level >= groupByColumns.length) {
      return data;
    }
    let groups = this.uniqueBy(
      data.map((row) => {
        const result = new Group();
        result.level = level + 1;
        for (let i = 0; i <= level; i++) {
          result[groupByColumns[i]] = row[groupByColumns[i]];
        }
        return result;
      }),
      JSON.stringify
    );

    const currentColumn = groupByColumns[level];
    let subGroups = [];
    groups.forEach((group) => {
      const rowsInGroup = data.filter(
        (row) => group[currentColumn] === row[currentColumn]
      );
      group.totalCounts = rowsInGroup.length;
      this.expandedSubCar = [];
    });
    groups = groups.sort((a: Car, b: Car) => {
      const isAsc = 'asc';
      return this.compare(a.brand, b.brand, isAsc);
    });
    this._allGroup = groups;
    return groups;
  }

  addGroupsNew(
    allGroup: any[],
    data: any[],
    groupByColumns: string[],
    dataRow: any
  ): any[] {
    const rootGroup = new Group();
    rootGroup.expanded = true;
    return this.getSublevelNew(
      allGroup,
      data,
      0,
      groupByColumns,
      rootGroup,
      dataRow
    );
  }

  getSublevelNew(
    allGroup: any[],
    data: any[],
    level: number,
    groupByColumns: string[],
    parent: Group,
    dataRow: any
  ): any[] {
    if (level >= groupByColumns.length) {
      return data;
    }
    const currentColumn = groupByColumns[level];
    let subGroups = [];
    allGroup.forEach((group) => {
      const rowsInGroup = data.filter(
        (row) => group[currentColumn] === row[currentColumn]
      );
      group.totalCounts = rowsInGroup.length;

      if (group.brand == dataRow.brand.toString()) {
        group.expanded = dataRow.expanded;
        const subGroup = this.getSublevelNew(
          allGroup,
          rowsInGroup,
          level + 1,
          groupByColumns,
          group,
          dataRow.brand.toString()
        );
        this.expandedSubCar = subGroup;
        subGroup.unshift(group);
        subGroups = subGroups.concat(subGroup);
      } else {
        subGroups = subGroups.concat(group);
      }
    });
    return subGroups;
  }

  uniqueBy(a, key) {
    const seen = {};
    return a.filter((item) => {
      const k = key(item);
      return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    });
  }

  isGroup(index, item): boolean {
    return item.level;
  }

  onSortData(sort: MatSort) {
    let data = this.allData;
    const index = data.findIndex((x) => x['level'] == 1);
    if (sort.active && sort.direction !== '') {
      if (index > -1) {
        data.splice(index, 1);
      }

      data = data.sort((a: Car, b: Car) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'id':
            return this.compare(a.id, b.id, isAsc);
          case 'vin':
            return this.compare(a.vin, b.vin, isAsc);
          case 'brand':
            return this.compare(a.brand, b.brand, isAsc);
          case 'year':
            return this.compare(a.year, b.year, isAsc);
          case 'color':
            return this.compare(a.color, b.color, isAsc);
          default:
            return 0;
        }
      });
    }
    this.dataSourceTable.data = this.addGroupsNew(
      this._allGroup,
      data,
      this.groupByColumns,
      this.expandedCar
    );
  }

  private compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}


export class Group {
  level = 0;
  expanded = false;
  totalCounts = 0;
}

export class Car {
  id: string = '';
  vin: string = '';
  brand: string = '';
  year: string = '';
  color: string = '';
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },

];
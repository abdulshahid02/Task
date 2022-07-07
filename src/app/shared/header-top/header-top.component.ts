import {Component, OnInit, Output,EventEmitter,HostBinding,ViewChild, OnDestroy } from '@angular/core';
import {APPCONFIG} from '../services/AppConfig';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { ColorPickerService } from '../services/color-picker.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss'],
})

export class HeaderTopComponent implements OnInit, OnDestroy {
  @ViewChild('snav') public sidenav: MatSidenav;
  routerSub: Subscription;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  public AppConfig: any;
  constructor(
    private router: Router,
    private colorPicker: ColorPickerService
  ) {}
  value:any="";
  ngOnInit() {
    this.AppConfig = APPCONFIG;
    this.routerSub = this.router.events.subscribe(event => {
      if (this.sidenav && event instanceof NavigationEnd) {
        this.sidenav.close();
      }
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  snavToggle(snav) {
    snav.toggle();
  }

  pickColor(color: string) {
    let colorTheme = '';
    if (color !== '') {
      colorTheme = `-${color}`;
    }
    this.colorPicker.setColorClass(
      `angular-material-router-app-theme${colorTheme}`
    );
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}

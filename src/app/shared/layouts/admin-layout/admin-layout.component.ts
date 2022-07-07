import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { APPCONFIG } from '../../services/AppConfig';
import { Observable, Subscription } from 'rxjs';
import { timer } from 'rxjs';
import { ColorPickerService } from '../../services/color-picker.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  sideBarOpen = true;
  _router: any;
  private _subscription: Subscription;
  themeClass;
  constructor(private colorPicker: ColorPickerService, private router: Router) {
    this.themeClass = this.colorPicker.getColorClass();
  }

  public AppConfig: any;
  headerFooter: boolean = false;

  ngOnInit() {
    this.headerFooter = false;
    this.AppConfig = APPCONFIG;
    let timer1 = timer(1, 100);
    this._subscription = timer1.subscribe(t => {
      this.router.events.subscribe(() => this._router = this.router.url);
      if (this.router.url == '/authentication/login' || this.router.url == '/authentication/login2' || this.router.url == '/authentication/signup') {
        this.headerFooter = true;
      }
    });
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}

import { Injectable } from '@angular/core';
import {APPCONFIG} from './AppConfig';

@Injectable({
  providedIn: 'root'
})
export class HandlerService {
  AppConfig;

  constructor() {
    this.AppConfig = APPCONFIG;
  }


  showLoader() {
    this.AppConfig['showLoader'] = true;
  }

  hideLoader() {
    this.AppConfig['showLoader'] = false;
  }


}

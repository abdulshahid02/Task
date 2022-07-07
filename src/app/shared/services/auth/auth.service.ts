import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    baseUrl = '/login'
    constructor(private http: HttpClient) { }

    login(userDetails){
        return this.http.post(this.baseUrl ,userDetails,{'headers' : new HttpHeaders ({'Content-Type' : 'application/json'}), 'responseType': 'text', observe:'response'});
        // return this.http.post(this.baseUrl ,userDetails, { headers: Headers});
        // return this.http.post(this.baseUrl ,userDetails ,{ headers: reqHeader });
    }
}

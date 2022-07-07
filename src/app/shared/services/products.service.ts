import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://jsonplaceholder.typicode.com/';
  getPosts(){
    return this.http.get(this.baseUrl+"posts");
  }
}

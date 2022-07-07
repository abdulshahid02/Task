import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userId = "admin";
  password = "admin";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.userId == "admin" && this.password == "admin"){
      this.router.navigate(['/dashboard'])
    }
    else
      window.alert("Invalid userid / password")
  }
}

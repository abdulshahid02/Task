import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form2',
  templateUrl: './login-form2.component.html',
  styleUrls: ['./login-form2.component.scss']
})
export class LoginForm2Component implements OnInit {
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

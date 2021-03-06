import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  public authToken;
  private isAuthenticated = true; // Set this value dynamically

  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if(localStorage.getItem('token') != null){
    //   this.isAuthenticated = true;
    //   return true;
    // }
    //   else
    // {
    //     this.router.navigate(['/sessions/signin']);
    //     return false;
    // }
    return true;
  }

  getToken(){
      return localStorage.getItem('token');
  }
}

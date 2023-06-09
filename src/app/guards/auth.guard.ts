import { Injectable } from '@angular/core';
import {  CanActivate, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private api: ApiService) { }

  canActivate() {
    return this.api.isLoggedIn();
  }
}



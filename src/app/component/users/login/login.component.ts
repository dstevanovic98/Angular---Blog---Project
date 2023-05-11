import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
   hide = true;
   email: string = ''
   password: string = ''
   
   
   constructor(private supabase: ApiService, private router:Router) { }

  login() {
   // this.supabase.loginUser(this.email, this.password).then(Response => {this.router.navigate(['home'])});
   this.supabase.loginUser(this.email, this.password);
   this.router.navigate(['home']);



  }
}

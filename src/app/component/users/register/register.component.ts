import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  firstName: string = ''
  lastName: string = ''
  email: string = ''
  password: string = ''

  constructor(private supabase: ApiService) { }
  register() {
    this.supabase.registerUser(this.email, this.password, this.firstName, this.lastName).then(Response => console.log(Response));
  }
}

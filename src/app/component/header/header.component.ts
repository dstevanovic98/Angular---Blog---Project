import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { interval, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nUser = 0;
  login: boolean = false;
  dateTime: Date | undefined;
  constructor(private api: ApiService) { }

  ngOnInit() {
    // Checks time on every second and shows it on the home page.
    setInterval(() => {
      this.dateTime = new Date(); 

        this.api.isLoggedIn().subscribe(loggedin => {
          if (loggedin) {
            console.log(loggedin)
            this.login = true;
            this.nUser = 1;
          } else {
            this.nUser = 0;
          }
        })

      
    }, 1000)



    // On every second, we check if the user is logged in. If there is a logged-in user, we change the number of users to 1. Otherwise, the value is 0.
  }

  logout(): Observable<any> {
    return this.api.logout();
  }

  status(): Observable<boolean> {
    return of(this.nUser === 1);
  }
}




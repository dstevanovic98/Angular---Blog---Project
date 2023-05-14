import { Component, OnInit } from '@angular/core';
import { async, timer } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dateTime: Date | undefined
  nUser = 0;
  login:boolean = false;
  constructor(private api: ApiService) { }

  async ngOnInit(): Promise<any> {

  //Na vsako sekudno posodobimo čas in ga prikažemo na začetno stran.
  // Checks time on every second, and shows it on home page.
    timer(0, 1000).subscribe(async() => { this.dateTime = new Date()
    }) 

// Preverimo na vsako sekundo če je uporabnik prisoten. Če je potem dodelimo vrednost 1, če ni potem je vr. 0;
// On every second we check if user is logedin. If there is loged user, we change number of users to 1. Otherwise, value is 0.
    timer(0, 1000).subscribe(async () => { 
      
      if(await this.api.isLoggedIn() == true) {
      this.login = true;
      this.nUser = 1;
    }
    else this.nUser = 0;
  })
}

  async logout() {
    await this.api.logout();
  }

 async status(){
  if(this.nUser == 1)return true;
 else return false;
}

}




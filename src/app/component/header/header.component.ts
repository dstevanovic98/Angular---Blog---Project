import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dateTime: Date | undefined
  nUser = 0;

  constructor(private api: ApiService) { }

  async ngOnInit(): Promise<any> {

    timer(0, 1000).subscribe(() => { this.dateTime = new Date() })

    timer(0, 10000).subscribe(async () => { 
      
      if(await this.api.isLoggedIn() == true) {
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




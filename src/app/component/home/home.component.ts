import { Component, ViewEncapsulation, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog  } from '@angular/material/dialog';
import { FromCardsComponent } from '../users/showdata/from-cards/from-cards.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {

  blogs: any[] = [];
  searchParameter: string = '';
  


  constructor(private api: ApiService, private snackBar: MatSnackBar, private dialog:MatDialog) {
    this.refreshBlogs();
  }

  async refreshBlogs() {

    const response = await this.api.getAllData();

    if (response !== null) {
      this.blogs = response;
    }
    else {
      console.error('Noting to show');
    }
  }
  async openSnackBar(message:string , action: string) {
    if(this.api.nUsers == 1){
      this.snackBar.open(message,action,{panelClass:'snackbar', duration: 3000});
    }
    else{ 
    this.snackBar.open('Error:Not logged in! To like, you must be loged in!','', {duration: 2000});
    }
    console.log(this.api.nUsers)
  }
  async openDialog(content:string){
   this.dialog.open(FromCardsComponent, {width:'60%',data:{content:content}});
   
  }
  
}

// Dobijamo sve sadržaje blogova:  " const response = await this.api.supabase.from('blogs').select('content'); " 
// Dobijamo home stranicu na snackbar-u : " this.snackBar.openFromComponent(HomeComponent, { duration: 5000, verticalPosition: 'top'});"
// const response  = await this.api.supabase.from('blogs').select('content').eq('id',2);
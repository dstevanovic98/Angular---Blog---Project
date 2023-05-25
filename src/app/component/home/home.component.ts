import { Component, ViewEncapsulation, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog  } from '@angular/material/dialog';
import { FromCardsComponent } from '../users/showdata/from-cards/from-cards.component';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';




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
 
  refreshBlogs() {
    this.api.getAllData().subscribe(res => {this.blogs = res.data});
  }
  // Odpira SnackBar in izpiše liked če je uporabnik prijavljen. 
  // Opens SnapBar and write (status) message.  
  openSnackBar(message: string, action: string) {
    from(this.api.isLoggedIn()).pipe(
      tap(isLoggedIn => {
        if (isLoggedIn) {
          this.snackBar.open(message, action, { panelClass: 'snackbar', duration: 3000 });
        } else {
          this.snackBar.open('Error: Not logged in! To like, you must be logged in!', '', { duration: 2000 });
        }
      })
    ).subscribe(loggedIn => {});
  
    console.log(this.api.nUsers);
  }
  // Funkcija ki vrne vsebino blog-a v novi komponenti. 
  // Function which returns blog content to another component.  
  openDialog(content: string) {
    this.dialog.open(FromCardsComponent, { width: '60%', data: { content: content } });
  }
}
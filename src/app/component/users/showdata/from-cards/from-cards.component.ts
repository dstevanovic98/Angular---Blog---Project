import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'app-from-cards',
  templateUrl: './from-cards.component.html',
  styleUrls: ['./from-cards.component.css']
})
export class FromCardsComponent {

  constructor(
    public dialogRef: MatDialogRef<FromCardsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {content:string}) {}

   async closeDialog(){
     this.dialogRef.close();
    }
  
}

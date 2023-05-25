import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent {
  title: string = '';
  content: string = '';
  image_url:string = '';
  tag:string = '';
  author:string ='';
  
  constructor(private supabase: ApiService, private router:Router) { }
  createBlog() {
    from(this.supabase.sendData(this.title, this.content, this.image_url, this.tag, this.author)).pipe(
      tap(() => {
        this.router.navigate(['home']);
      })
    ).subscribe();
  }
}

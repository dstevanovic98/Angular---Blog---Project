import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


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
    this.supabase.sendData(this.title, this.content, this.image_url, this.tag,this.author).then(Response => {this.router.navigate(['home'])});
  }
}

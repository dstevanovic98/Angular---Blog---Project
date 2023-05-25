import { Injectable } from '@angular/core';
import { AuthResponse, createClient, SupabaseClient } from '@supabase/supabase-js';
import { initSupabase } from '../initSupabase';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  supabase: SupabaseClient = createClient(initSupabase.supabaseUrl, initSupabase.supabaseKey);

  nUsers = 0;
  constructor(private router: Router) { }

  addUser(user: User): Observable<any> {
    return from(this.supabase.from('Blog').select('*'))
  }

  registerUser(email: string, password: string, firstname: string, lastname: string): Observable<any> {
    console.log(email, password, firstname, lastname);

    return from(
      this.supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            firstname: firstname,
            lastname: lastname,
          }
        }
      })
    );
  }

  loginUser(email: string, password: string): Observable<AuthResponse> {
    return from(
      this.supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
    );
  }

  sendData(title: string, content: string, image_url: string, tag: string, author: string): Observable<any> {
    return from(
      this.supabase.from('blogs').insert({
        title: title,
        content: content,
        image_url: image_url,
        tag: tag,
        author: author,
      })
    );
  }

  getAllData(): Observable<any> {
    return from(this.supabase.from('blogs').select('*'));
  }

  isLoggedIn(): Observable<boolean> {
    
    console.log("Check LOGGIN")
    return new Observable<boolean>((sub) => {
      from(this.supabase.auth.getUser()).subscribe(res => {
        if (res.data.user != null) {
          sub.next(true)
        }
        else {
          sub.next(false)
        }
      })
    })


  }

  logout(): Observable<any> {
    this.nUsers = 0;

    return from(this.supabase.auth.signOut())
  }
}
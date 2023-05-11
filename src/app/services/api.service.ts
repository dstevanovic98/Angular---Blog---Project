import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { initSupabase } from '../initSupabase';
import { User } from '../user.model';
import { Database } from './database.types'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  supabase: SupabaseClient = createClient<Database>(initSupabase.supabaseUrl, initSupabase.supabaseKey);

nUsers = 0;
  constructor(private router: Router) { }

  async addUser(User: User) {
    const { data, error } = await this.supabase.from('Blog').select('*');
    console.log(data);
    return { data, error };
  }

  async registerUser(email: string, password: string, firstname: string, lastname: string) {
    console.log(email, password, firstname, lastname)
    const response = await this.supabase.auth.signUp(
      {
        email: email,
        password: password,
        options: {
          data: {
            firstname: firstname,
            lastname: lastname,
          }
        }

      })
    return response.data;
  }


  async loginUser(email: string, password: string) {
    const response = await this.supabase.auth.signInWithPassword(
      {
        email: email,
        password: password,
      })

  }
  async sendData(title: string, content: string, image_url: string, tag: string, author: string) {
    const { data, error } = await this.supabase.from('blogs').insert(
      {
        title: title,
        content: content,
        image_url: image_url,
        tag: tag,
        author: author,
      })
  }

  async getAllData() {
    const response = await this.supabase.from('blogs').select('*');
    return response.data;
  }

  async isLoggedIn() {

    const result = await this.supabase.auth.getUser()
    console.log(result);
    return result.data.user !== null
   
  }

  async logout() {
    this.nUsers = 0;
    const result = await this.supabase.auth.signOut();
    if (result.error == null) {
      this.router.navigate(['home']);

    }
  }
  }

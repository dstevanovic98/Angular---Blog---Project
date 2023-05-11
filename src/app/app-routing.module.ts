import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/users/login/login.component';
import { RegisterComponent } from './component/users/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { CreateblogComponent } from './component/users/createblog/createblog.component';
import { AuthGuard } from './guards/auth.guard';


const routes:
  Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'createBlog', component: CreateblogComponent, canActivate:[AuthGuard] },
    { path: '**', component: HomeComponent }




  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

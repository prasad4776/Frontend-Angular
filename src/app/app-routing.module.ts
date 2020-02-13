import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from '../app/book/book.component';
import { AuthorComponent } from '../app/author/author.component';
import { IssueComponent } from '../app/issue/issue.component';
import {PagenotfoundComponent} from '../app/pagenotfound/pagenotfound.component'
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [

  {path: '',redirectTo: '/login',pathMatch: 'full'},
  {path : 'login' , component : LoginComponent},
  {path : 'users' , component : UserComponent,canActivate:[AuthGuard]},
  {path : 'books' , component : BookComponent,canActivate:[AuthGuard]},
  {path : 'authors',component : AuthorComponent,canActivate:[AuthGuard]},
  {path : 'issues',component:IssueComponent,canActivate:[AuthGuard]},
  {path : '**' ,component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BookComponent,AuthorComponent,IssueComponent]
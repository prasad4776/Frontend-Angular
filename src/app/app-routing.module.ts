import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from '../app/book/book.component';
import { AuthorComponent } from '../app/author/author.component';
import { IssueComponent } from '../app/issue/issue.component';
import {PagenotfoundComponent} from '../app/pagenotfound/pagenotfound.component'
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component : LoginComponent},
  {path : 'books' , component : BookComponent},
  {path : 'authors',component : AuthorComponent},
  {path : 'issues',component:IssueComponent},
  {path : '**' ,component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BookComponent,AuthorComponent,IssueComponent]
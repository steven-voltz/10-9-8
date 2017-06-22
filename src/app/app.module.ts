import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShellComponent } from './shell.component';
import { OhHellComponent } from './oh-hell.component';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    ShellComponent, OhHellComponent, LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      {
        path: 'main',
        component: OhHellComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }

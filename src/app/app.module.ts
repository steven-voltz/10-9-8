import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GameComponent } from './game.component';
import { ShellComponent } from './shell.component';
import { OhHellComponent } from './oh-hell.component';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    ShellComponent, OhHellComponent, LoginComponent, GameComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      {
        path: 'main',
        component: GameComponent
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

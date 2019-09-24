import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';

const chatRoot:Routes=[
  {
    path:'',
    component:ChatComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(chatRoot)
  ],

  declarations: [ChatComponent]
})
export class ChatModule { }

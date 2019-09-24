import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { Routes, RouterModule } from '@angular/router';

const requestRoot:Routes=[
  {
    path:'',
    component:RequestComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(requestRoot)
  ],
  declarations: [RequestComponent]
})
export class RequestModule { }

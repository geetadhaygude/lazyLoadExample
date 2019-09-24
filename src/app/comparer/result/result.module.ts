import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result.component';

const rootResult:Routes=[
  { path:'',component:ResultComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rootResult)
  ],
  declarations: [ResultComponent]
})
export class ResultModule { }

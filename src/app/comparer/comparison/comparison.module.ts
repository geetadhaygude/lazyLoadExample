import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComparisonComponent } from './comparison.component';

const rootCompare:Routes=[
  { 
    path:'',
    component:ComparisonComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rootCompare)
  ],
  declarations: [ComparisonComponent]
})
export class ComparisonModule { }

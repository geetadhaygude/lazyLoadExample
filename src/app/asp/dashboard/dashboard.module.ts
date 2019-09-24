import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const dashboardRoot:Routes=[
  { path:'',component:DashboardComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoot)

  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

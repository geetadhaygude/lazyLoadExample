import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { 
    path:'',
    component:LayoutComponent,
    children:[
      { path:'chat',loadChildren:'../../asp/chat/chat.module#ChatModule' },
      { path:'dashboard',loadChildren:'../../asp/dashboard/dashboard.module#DashboardModule'},
      { path:'upload',loadChildren:'../../asp/upload/upload.module#UploadModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload.component';

const uploadRoute:Routes=[
  {
    path:'',
    component:UploadComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(uploadRoute)
  ],
  exports:[RouterModule],
  declarations: [UploadComponent]
})
export class UploadModule { }

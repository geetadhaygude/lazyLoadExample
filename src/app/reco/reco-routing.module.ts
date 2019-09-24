import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoComponent } from './reco.component';

const routes: Routes = [
  {
    path:'',component:RecoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoRoutingModule { }

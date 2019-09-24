import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparerComponent } from './comparer.component';

const routes: Routes = [
  {
    path:'',
    component:ComparerComponent,
    children:[
      { path:'compare',loadChildren:'app/comparer/comparison/comparison.module#ComparisonModule'},
      { path:'request',loadChildren:'app/comparer/request/request.module#RequestModule'},
      { path:'result',loadChildren:'app/comparer/result/result.module#ResultModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComparerRoutingModule { }

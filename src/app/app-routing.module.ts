import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const root:Routes=[
  { path:'',pathMatch:'full',redirectTo:'asp'},
  { path:'asp',loadChildren:'app/asp/asp.module#AspModule'},
  { path:'comparer',loadChildren:'app/comparer/comparer.module#ComparerModule'},
  { path:'reco',loadChildren:'app/reco/reco.module#RecoModule'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(root)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }

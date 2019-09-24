import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',pathMatch:'full',redirectTo:'layout'},
  { path:'layout',loadChildren:'../asp/layout/layout.module#LayoutModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspRoutingModule { }

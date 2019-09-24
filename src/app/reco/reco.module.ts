import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoComponent } from './reco.component';
import { RecoRoutingModule } from './reco-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RecoRoutingModule
  ],
  declarations: [RecoComponent]
})
export class RecoModule { }

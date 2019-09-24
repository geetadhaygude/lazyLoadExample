import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComparerComponent } from './comparer.component';
import { ComparerRoutingModule } from './comparer-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ComparerRoutingModule
  ],
  declarations: [ComparerComponent]
})
export class ComparerModule { }

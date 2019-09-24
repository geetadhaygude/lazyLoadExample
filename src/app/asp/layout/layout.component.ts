import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
isopen:boolean=true;
isClick:string='jan';
currentPosition=65;
activeMonth:any={id:1,month:'APR'}
monthList:any[]=[
  { id:1,month:'APR'},
  { id:2,month:'MAY'},
  { id:3,month:'JUN'},
  { id:4,month:'JUL'},
  { id:5,month:'AUG'},
  { id:6,month:'SEPT'},
  { id:7,month:'OCT'},
  { id:8,month:'NOV'},
  { id:9,month:'DEC'},
  { id:10,month:'JAN'},
  { id:11,month:'FEB'},
  { id:12,month:'MAR'}
]
temp:boolean=false;

  constructor() { }

  ngOnInit() {
  }


  onSelectionChange(monthName:string){
    this.isClick=monthName;
  }

  setActive(mon){
    
    let diff=0;
    if(mon.id>this.activeMonth.id){
      diff=mon.id-this.activeMonth.id;
      this.currentPosition=this.currentPosition+(74*diff);
    }  
    else{
      diff=this.activeMonth.id-mon.id;
      this.currentPosition=this.currentPosition-(74*diff);
    }
    this.activeMonth=mon;
    
  }
}

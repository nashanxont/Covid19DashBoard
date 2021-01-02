import { formatPercent } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalrecovery',
  templateUrl: './totalrecovery.component.html',
  styleUrls: ['./totalrecovery.component.css']
})
export class TotalrecoveryComponent implements OnInit {

  @Input() total_cases : number;
  @Input() total_recovered : number;
  recoveryRate : number;

  constructor() { }

  

  ngOnInit(): void {
      //this.setData();
  }
  
  ngOnChanges():void{
    this.setData();
  }


 
  setData(){
    if(this.total_cases > 0)
      this.recoveryRate = (this.total_recovered/this.total_cases)*100;
    else
      this.recoveryRate =0;
  }

  
}

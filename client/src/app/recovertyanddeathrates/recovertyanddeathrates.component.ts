import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-recovertyanddeathrates',
  templateUrl: './recovertyanddeathrates.component.html',
  styleUrls: ['./recovertyanddeathrates.component.css']
})
export class RecovertyanddeathratesComponent implements OnInit {
  @Input() total_cases : number;
  @Input() total_recovered : number;
  @Input() total_deaths : number;
  recoveryRate:number;
  deathRate:number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.setData();
  }

  setData():void{
    if(this.total_cases >0){
      this.recoveryRate = (this.total_recovered/this.total_cases)*100;
      this.deathRate = (this.total_deaths/this.total_cases)*100;
    }else{
      this.recoveryRate = 0;
      this.deathRate =0;
    }
  }

}

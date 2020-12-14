import { formatPercent } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalrecovery',
  templateUrl: './totalrecovery.component.html',
  styleUrls: ['./totalrecovery.component.css']
})
export class TotalrecoveryComponent implements OnInit {

  constructor() { }

  @Input() total_cases : Number;
  @Input() total_recovered : Number;
  local_total_cases:Number;
  local_total_recovery:Number;
  recoveryRate : Number;

  ngOnInit(): void {
    this.local_total_cases = this.total_cases;
    this.local_total_recovery = this.total_recovered;
    
  }

  
}

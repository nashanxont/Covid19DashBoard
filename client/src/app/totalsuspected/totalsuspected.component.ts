import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalsuspected',
  templateUrl: './totalsuspected.component.html',
  styleUrls: ['./totalsuspected.component.css']
})
export class TotalsuspectedComponent implements OnInit {

  constructor() { }

 @Input() total_suspected : number;

  ngOnInit(): void {
  }

}

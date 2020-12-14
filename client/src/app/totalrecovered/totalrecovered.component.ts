import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalrecovered',
  templateUrl: './totalrecovered.component.html',
  styleUrls: ['./totalrecovered.component.css']
})
export class TotalrecoveredComponent implements OnInit {

  constructor() { }
  
  @Input() total_recovered : Number;

  ngOnInit(): void {
  }

}

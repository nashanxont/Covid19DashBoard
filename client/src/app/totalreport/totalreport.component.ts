import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalreport',
  templateUrl: './totalreport.component.html',
  styleUrls: ['./totalreport.component.css']
})
export class TotalreportComponent implements OnInit {
  
  public CurrentDate =  new Date();
  constructor() { }

  @Input() new_deaths : number;
  @Input() new_cases : number;

  ngOnInit(): void {
  }

}

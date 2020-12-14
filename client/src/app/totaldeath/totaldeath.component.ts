import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-totaldeath',
  templateUrl: './totaldeath.component.html',
  styleUrls: ['./totaldeath.component.css']
})
export class TotaldeathComponent implements OnInit {
 
  public allData :any = {};
  
  constructor() { }

  @Input() total_death : number;

  ngOnInit(): void {
    
  }

}

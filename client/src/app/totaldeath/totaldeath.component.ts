import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-totaldeath',
  templateUrl: './totaldeath.component.html',
  styleUrls: ['./totaldeath.component.css']
})
export class TotaldeathComponent implements OnInit {
 
    
  constructor() { }

  @Input() total_death : number;
  total_deathString : string ="";

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    this.total_deathString = this.total_death.toLocaleString();
  }

}

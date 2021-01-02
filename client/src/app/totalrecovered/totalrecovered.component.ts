import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalrecovered',
  templateUrl: './totalrecovered.component.html',
  styleUrls: ['./totalrecovered.component.css']
})
export class TotalrecoveredComponent implements OnInit {

  constructor() { }
  
  @Input() total_recovered : number;
  total_recoveredString :string;
  ngOnInit(): void {
  }

  ngOnChanges(){
    this.total_recoveredString = this.total_recovered.toLocaleString();
  }

}

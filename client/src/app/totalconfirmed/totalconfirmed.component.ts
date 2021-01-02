import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalconfirmed',
  templateUrl: './totalconfirmed.component.html',
  styleUrls: ['./totalconfirmed.component.css']
})
export class TotalconfirmedComponent implements OnInit {

  constructor() { }

  @Input() total_confirmed : number;
  total_confirmedString:string;
  ngOnInit(): void {
  }

  ngOnChanges(){
    this.total_confirmedString = this.total_confirmed.toLocaleString();
  }

}

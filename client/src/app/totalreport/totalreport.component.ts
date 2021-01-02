import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalreport',
  templateUrl: './totalreport.component.html',
  styleUrls: ['./totalreport.component.css']
})
export class TotalreportComponent implements OnInit {
  
  public CurrentDate =  new Date();
  CurrentDateString : string;

  days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  constructor() { 
    
  }

  @Input() new_deaths : number;
  @Input() new_cases : number;

  ngOnInit(): void {
    this.CurrentDateString = this.CurrentDate.toLocaleString('default', { month: 'long' })
                                 +" " + this.convert(this.CurrentDate.getDate())+" "+this.days[this.CurrentDate.getDay()];

  }

   convert(n:any){
    let res = '';  
    if (n === 0) return res = String(n)
    
    switch (n % 10) {
      case 1:
        if ( n === 11)  return res = `${n}th`;
         res = `${n}st`;
        break;
      case 2:
        if ( n === 12)  return res = `${n}th`;
         res = `${n}nd`;
        break;
      case 3:
        if ( n === 13)  return res = `${n}th`;
         res = `${n}rd`;
        break;
      default:
         res = `${n}th`;
        break;
    }
    return res
  }


}

import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, Input, OnInit } from '@angular/core';
//import Chart from 'chart.js';

@Component({
  selector: 'app-dailycases',
  templateUrl: './dailycases.component.html',
  styleUrls: ['./dailycases.component.css']
})
export class DailycasesComponent implements OnInit {

  constructor() { }

  @Input() dailyCasesArray:any[] = [];
  dateLabelArray:any[]=[];
  chartData:any[]=[];
  reportDateRange:string='';

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
        yAxes: [{
            ticks: {
                fontColor: "#fff",
                beginAtZero: true,
                fontSize:10
            }
        }],
        xAxes: [{
            ticks: {
                fontColor: "#fff",
                beginAtZero: true,
                fontSize:8
            }
        }]}
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData = [];

  ngOnInit(): void {
    //console.log(this.dailyCasesArray);
    
  }

  ngOnChanges(){
   console.log(this.dailyCasesArray);
   this.setBarChartData();
  }

  setBarChartData(){
    let currentDate = new Date();
    let chartStartDate =  new Date(Date.now()- 10 * 24 * 60 * 60 * 1000);
    let tempCount =0;
    let filteredArray = this.dailyCasesArray.filter(x=>new Date(x.date) >= new Date(chartStartDate.toDateString()) 
                                                               && new Date(x.date) <= new Date(currentDate.toDateString()));

    //console.log(filteredArray);
    filteredArray.forEach(x1=>{
                                this.dateLabelArray.push(new Date(x1.date).toString().split(' ').slice(1,3).reverse().join(" "));
                                tempCount = x1.count*.01;
                                this.chartData.push(tempCount);
                            });

   this.reportDateRange = "From "+chartStartDate.toString().split(' ').slice(1,4).reverse().join(" ")+" to "
                                                                            +currentDate.toString().split(' ').slice(1,4).reverse().join(" ");

    this.barChartLabels = this.dateLabelArray;
    this.barChartData = [
        {
            data:this.chartData,
            label:'new cases',
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor:'#77B6ff'
        }
    ];
  }

 

}

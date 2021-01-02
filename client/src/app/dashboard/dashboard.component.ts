import { Component, OnInit } from '@angular/core';
import { DashboardService} from '../dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  public total_deaths = 0;
  public total_confirmed = 0;
  public total_recovered = 0;
  public total_suspected = 0;
  public total_cases = 0;
  public new_deaths = 0;
  public new_cases =0;
  public dailyCasesArray:any[]=[];

  constructor(private dashbaordService : DashboardService) { }

  ngOnInit(): void {
    this.getAllCurrentHealthData();
   
  }

  getAllCurrentHealthData(){
    this.dashbaordService.getCurrentStatisticalData().subscribe(
      (data : any)=>{
        console.log(data);
        this.total_deaths = data.data.local_deaths;
        this.total_confirmed = data.data.local_total_cases;
        this.total_recovered = data.data.local_recovered;
        this.total_suspected = data.data.local_total_number_of_individuals_in_hospitals;
        this.total_cases = data.data.local_total_cases;
        this.new_deaths = data.data.local_new_deaths;
        this.new_cases  = data.data.local_new_cases; 
        this.dailyCasesArray = data.data.daily_pcr_testing_data;
        console.log("total_cases1"+this.total_cases);
      },
      (error)=>{
        console.log(error);
      }
    );

    
  }

}

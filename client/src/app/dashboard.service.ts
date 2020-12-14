import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url : string = "http://localhost:4200/api/get-current-statistical";
  constructor(private http:HttpClient) { }



  public getCurrentStatisticalData(){
    return this.http.get(this.url)
       .pipe();
 }


}

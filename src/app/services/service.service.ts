import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService
 {
      
      dummyurl:string="https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";

  constructor( private _http : HttpClient) 
  { }
  getcourse()
  {
    return [{
      id:'1',
      name:'java',
      fee:'1500'
    },
  {
    id:'2',
    name:'css',
    fee:'1000'
  },
  {
    id:'3',
    name:'html',
    fee:'254'
  }]
  }
  recieve():Observable<[]>{
     return this._http.get<any>(this.dummyurl);
  }
}
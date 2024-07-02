import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService 
{

  private _restCountries="";
  public restApis:string="https://restcountries.com/v3.1/all";
    public message:string="iam from serice"
  msg: string;

  constructor(private _httpClient:HttpClient) { }
  
     receivemsg()
     {
            return this.message
    }
    hitApi() :Observable<any>
    {
        return this._httpClient.get<any>(this.restApis);
    }

  }

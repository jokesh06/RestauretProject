import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-hittingurl',
  templateUrl: './hittingurl.component.html',
  styleUrls: ['./hittingurl.component.css']
})
export class HittingurlComponent {
       data:[];
      constructor(private _http:ServiceService)
      {}
       data1:any=[];
    ngOnInit()
    { 
      
      this._http.recieve().subscribe((response)=>{
      console.log(response);
           this.data=response;
    }
    )}
  }
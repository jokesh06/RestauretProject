import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-xyenta1',
  templateUrl: './xyenta1.component.html',
  styleUrls: ['./xyenta1.component.css']
})
export class Xyenta1Component 
{     countries:any;
  constructor(private _service:DemoService)
  {

  }
    ngOnInit()
    {
      this.recieveApi();
    }
  recieveApi()
  {
     this._service.hitApi().subscribe((data)=> {

     console.log(data),
     this.countries=data})
  }
  
}

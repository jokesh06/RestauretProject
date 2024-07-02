import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngvigate1',
  templateUrl: './ngvigate1.component.html',
  styleUrls: ['./ngvigate1.component.css']
})
export class Ngvigate1Component {

   constructor(private _router:Router){}
  navigate()
  {
     this._router.navigate(['/tel']);
  }


ngOnDestroy()
{
  alert("ngOnDestroy is active");
}
}

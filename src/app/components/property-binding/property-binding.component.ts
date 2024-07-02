import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent
{
  name:string="hello";
    angular10:string="hii";
    hello:string="jokd"
    textcolor:false;
    isActive=true;
    cvar:string="red";
    mystyle:object={
      color:'green',
      background:'grey',
      border:'5px solid blue'
    
    }
      }

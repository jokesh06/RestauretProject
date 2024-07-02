import { Component } from '@angular/core';

@Component({
  selector: 'app-templatereference',
  templateUrl: './templatereference.component.html',
  styleUrls: ['./templatereference.component.css']
})
export class TemplatereferenceComponent {
   message:string;


 show(msg){
     this.message=msg.value;
 }
}

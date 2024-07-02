import { AfterContentChecked, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
 {
    @Input() appData: any;
    @Output() messageEvent=new EventEmitter();
    
    message:string="hello world";
    name:String;
    message1:string;
      sendMessage()
      {
        this.messageEvent.emit(this.message)
      }
      constructor(private _msg:DemoService){}
    
     
       ngonInit()
       {

       
       this.name= this._msg.receivemsg();
       
}
}

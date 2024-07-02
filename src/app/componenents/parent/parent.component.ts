import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  implements AfterContentChecked
{
    message1:string;
    @ViewChild(ChildComponent) child;
   ngAfterContentChecked(): void {
      this.message1=this.child?.message
   }
    public message:string="I am from parent";
    public msg:string;
       receivemessage($event)
       {
          this.msg=$event
          console.log(this.msg);
       }
      constructor()
      {
            let o=new Observable((Response)=>{
               console.log(Response)
            Response.next("this one");
            Response.next("this Two");
            Response.next("this Three");

            
            });
            o.subscribe((data)=>{

            console.log(data)
            next:async(value)=>{
               console.log(value);
               error:(error)=>{
                  console.log(error)
               }
            }
         
         })
      }
      }
            
      


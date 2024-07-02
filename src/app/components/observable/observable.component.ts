import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent 
{
     ngonInit(){
  let b=new Observable((response)=>{
      console.log("i am from obserble");
         response.next("hello");
         response.next("hii");
         response.next("good");
         response.next("morning");
      } )
      b.subscribe()
  let p=new Promise((res)=>{
     console.log("promise call");
       res("hello");
       res("hii");}
       )}
}

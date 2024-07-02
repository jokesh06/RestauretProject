import { Component, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent
 {
   @ViewChild("a") a ;
   @ViewChildren("b") b;
      click()
      {
        console.log(this.a.nativeElement.innerText);
          for(let x of this.a){
          console.log(x.nativeElement.innerText);
          }
      }
}

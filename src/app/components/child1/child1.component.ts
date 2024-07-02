import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component
 {
    @ContentChild('abc') abc:ElementRef;
    // @ViewChild('abc') abc1:ElementRef;

    ngAfterContentInit()
      { 
        console.log(this.abc.nativeElement.innerText);
  }
    
}

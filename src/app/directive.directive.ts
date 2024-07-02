import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor( private __eleRef:ElementRef) {
     this.__eleRef.nativeElement.style.background='red';
   }

}

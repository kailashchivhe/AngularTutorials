import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.background = "yellow";
    this.elementRef.nativeElement.style.fontWeight = "bold";
   }

}

import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor( private ele: ElementRef) { }
  
  @HostListener('mouseenter') onmouseenter()
  {
    this.ele.nativeElement.style.background='red';
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.ele.nativeElement.style.background='blue';
  }

}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private ele:ElementRef) { }
ngOnInit(){
  this.ele.nativeElement.style.borderTopLeftRadius='2em';
}
}

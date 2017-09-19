import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight], input' })
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'lightgray';
    console.log(
      `* Shared highlight called for ${el.nativeElement.tagName}`);
   }
}

@Directive({ selector: '[titleHighlight]'})
export class TitleHighlighDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'gold';
    console.log(
      `* Title highlight called for ${el.nativeElement.tagName}`);
   }
}

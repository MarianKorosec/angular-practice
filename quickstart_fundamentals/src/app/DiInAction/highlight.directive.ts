import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[actionHighlight]'
})
export class HighlightDirective {

@Input('actionHighlight') highlightColor: string;

private el: HTMLElement;

  constructor(el: ElementRef) {
      this.el = el.nativeElement;
    }

  @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.highlightColor || 'cyan');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.style.backgroundColor = color;
  }
}

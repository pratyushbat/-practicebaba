import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: { '(click)': 'applyLogic()' },
})
export class HighlightDirective {
  @Input() number = 0;
  @Input() divisibleBy = 1;
  private el: ElementRef | undefined;

  constructor(el: ElementRef) {
    this.el = el;
    console.log(this.number, this.divisibleBy);
  }
  applyLogic() {
    console.log(this.number, this.divisibleBy);

    if (this.number % this.divisibleBy === 0) {
      if (this.el) this.el.nativeElement.style.color = 'green';
      console.log(this.el);
    } else {
      if (this.el) this.el.nativeElement.style.color = 'red';
      console.log(this.el);
    }
  }
}

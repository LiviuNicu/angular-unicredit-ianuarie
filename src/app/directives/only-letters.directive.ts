import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyLetters]',
})
export class OnlyLettersDirective {
  constructor() {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key = event.keyCode;
    if ((key >= 15 && key <= 64) || key >= 123 || (key >= 96 && key <= 105)) {
      event.preventDefault();
    }
  }
}

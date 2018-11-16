import { Directive, ElementRef, NgZone } from '@angular/core';

@Directive({
  selector: '[appFocusOnShow]',
})
export class FocusOnShowDirective {
  constructor(el: ElementRef, ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        el.nativeElement.focus();
      }, 0);
    });
  }
}

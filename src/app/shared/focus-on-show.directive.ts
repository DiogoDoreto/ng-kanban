import { Directive, ElementRef, NgZone, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusOnShow]',
})
export class FocusOnShowDirective implements OnInit {
  constructor(private el: ElementRef, private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.el.nativeElement.focus();
      }, 0);
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusOnShowDirective } from './focus-on-show.directive';

@NgModule({
  declarations: [FocusOnShowDirective],
  exports: [FocusOnShowDirective],
})
export class SharedModule {}

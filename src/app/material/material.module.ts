import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
} from '@angular/material';

const modules = [
  MatCardModule,
  DragDropModule,
  MatButtonModule,
  MatInputModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}

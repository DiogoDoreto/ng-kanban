import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
} from '@angular/material';

const modules = [
  DragDropModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}

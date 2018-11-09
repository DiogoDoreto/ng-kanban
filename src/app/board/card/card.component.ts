import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Card } from '../card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent {
  @Input() card: Card;

  @Input() isDragging = false;

  @Output() changeTitle = new EventEmitter<string>();

  isRenaming = false;

  title = new FormControl('', Validators.required);

  @ViewChild('titleInput') titleInput: ElementRef<HTMLTextAreaElement>;

  showForm() {
    this.isRenaming = true;
    this.title.setValue(this.card.title);
    setTimeout(() => {
      this.titleInput.nativeElement.focus();
    }, 0);
  }

  submit() {
    if (this.title.valid) {
      this.changeTitle.emit(this.title.value);
    }
    this.cancelEdit();
  }

  cancelEdit() {
    this.isRenaming = false;
  }
}

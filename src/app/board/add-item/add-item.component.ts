import {
  AfterViewChecked,
  Component,
  ElementRef,
  HostBinding,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.less'],
})
export class AddItemComponent implements AfterViewChecked {
  @Output()
  submit = new EventEmitter<string>();

  @HostBinding('class.isAdding')
  isAdding = false;

  @ViewChild('title')
  titleInput: ElementRef;

  titleValue = '';

  ngAfterViewChecked() {
    if (
      this.isAdding &&
      document.activeElement !== this.titleInput.nativeElement
    ) {
      setTimeout(() => {
        this.titleInput.nativeElement.focus();
      }, 0);
    }
  }

  reset() {
    this.isAdding = false;
    this.titleValue = '';
  }

  inputKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const value = this.titleValue.trim();
      if (value) {
        this.submit.emit(value);
      }
      this.reset();
    }
    if (event.key === 'Escape') {
      this.reset();
    }
  }
}

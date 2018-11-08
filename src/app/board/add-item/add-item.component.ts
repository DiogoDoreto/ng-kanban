import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.less'],
})
export class AddItemComponent implements AfterViewChecked {
  @Input()
  itemType: string;

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

  trySubmit() {
    const value = this.titleValue.trim();
    if (value) {
      this.submit.emit(value);
    }
    this.reset();
  }
}

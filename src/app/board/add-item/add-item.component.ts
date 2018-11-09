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
import { FormBuilder, FormGroup } from '@angular/forms';

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
  get isAdding() {
    return this.form.get('isAdding').value as boolean;
  }

  set isAdding(value) {
    this.form.patchValue({ isAdding: Boolean(value) });
  }

  @ViewChild('title')
  titleInput: ElementRef;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      isAdding: false,
      title: '',
    });
  }

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
    this.form.reset();
  }

  trySubmit() {
    const value = this.form.get('title').value.trim();
    if (value) {
      this.submit.emit(value);
    }
    this.reset();
  }
}

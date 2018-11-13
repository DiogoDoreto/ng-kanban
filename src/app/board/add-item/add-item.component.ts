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
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.less'],
})
export class AddItemComponent implements AfterViewChecked {
  @Input() itemType: string;

  @Output() submit = new EventEmitter<string>();

  @HostBinding('class.isAdding')
  get isAdding() {
    return this.form.get('isAdding').value as boolean;
  }

  set isAdding(value) {
    this.form.patchValue({ isAdding: Boolean(value) });
  }

  @ViewChild('title') titleInput: ElementRef;

  @ViewChild(FormGroupDirective) formRef: FormGroupDirective;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      isAdding: false,
      title: ['', Validators.required],
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
    // see https://github.com/angular/material2/issues/4190#issuecomment-305222426
    this.formRef.resetForm();
  }

  onSubmit(event: Event) {
    event.stopPropagation();
    if (this.form.invalid) {
      return;
    }

    const value = this.form.get('title').value.trim();
    if (value) {
      this.submit.emit(value);
    }
    this.reset();
  }
}

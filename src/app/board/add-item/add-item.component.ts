import {
  Component,
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
export class AddItemComponent {
  @Input() itemType: string;

  @Output() submit = new EventEmitter<string>();

  @HostBinding('class.isAdding')
  get isAdding() {
    const control = this.form.get('isAdding');
    const value = control && control.value;
    return Boolean(value);
  }

  set isAdding(value) {
    this.form.patchValue({ isAdding: Boolean(value) });
  }

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

  reset() {
    // see https://github.com/angular/material2/issues/4190#issuecomment-305222426
    this.formRef.resetForm();
  }

  onSubmit(event: Event) {
    event.stopPropagation();
    if (this.form.invalid) {
      return;
    }

    const control = this.form.get('title');
    const title: string = control && control.value && control.value.trim();
    if (title) {
      this.submit.emit(title);
    }
    this.reset();
  }
}

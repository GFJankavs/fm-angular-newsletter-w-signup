import { Component, computed, input, model, output } from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'app-form-input',
  imports: [],
  templateUrl: './form-input.html',
  styleUrl: './form-input.css',
})
export class FormInput implements FormValueControl<string> {
  value = model<string>('');
  errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);
  touched = input(false);
  touch = output<void>();

  placeholder = input.required<string>();
  id = input.required<string>();
  type = input<string>('email');
  label = input<string>();
  title = input<string>();

  errorText = computed(() => (this.touched() ? (this.errors()[0]?.message ?? '') : ''));
}

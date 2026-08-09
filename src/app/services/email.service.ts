import { Service, signal } from '@angular/core';

@Service()
export class EmailForm {
  protected _email = signal('');
  protected _isEmailSent = signal(false);

  readonly email = this._email.asReadonly();
  readonly isEmailSent = this._isEmailSent.asReadonly();

  updateEmail(value: string) {
    this._email.set(value);
  }

  setIsEmailSent(value: boolean) {
    this._isEmailSent.set(value);
  }
}

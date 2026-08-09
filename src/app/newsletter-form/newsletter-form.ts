import { Component, inject, output, signal } from '@angular/core';
import { Button } from '../button/button';
import { email, form, required, FormRoot, FormField } from '@angular/forms/signals';
import { FormInput } from '../form-input/form-input';
import { EmailForm } from '../services/email.service';

interface INewsletterForm {
  email: string;
}

const EMPTY_FORM: INewsletterForm = {
  email: '',
};

@Component({
  selector: 'app-newsletter-form',
  imports: [Button, FormRoot, FormField, FormInput],
  templateUrl: './newsletter-form.html',
  styleUrl: './newsletter-form.css',
})
export class NewsletterForm {
  emailFormService = inject(EmailForm);

  newsletterForm = signal<INewsletterForm>({ ...EMPTY_FORM });
  isFormSubmitted = signal<boolean>(false);
  submittedEmail = signal<string>('');

  newsletterFormInputs = form(
    this.newsletterForm,
    (path) => {
      required(path.email, { message: 'This field is required' });
      email(path.email, { message: 'This email does not have required format' });
    },
    {
      submission: {
        action: async (f) => {
          this.emailFormService.updateEmail(f().value().email);
          this.emailFormService.setIsEmailSent(true);
        },
      },
    },
  );
}

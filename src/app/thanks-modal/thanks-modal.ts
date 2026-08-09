import { Component, inject, signal } from '@angular/core';
import { Button } from '../button/button';
import { EmailForm } from '../services/email.service';

@Component({
  selector: 'app-thanks-modal',
  imports: [Button],
  templateUrl: './thanks-modal.html',
  styleUrl: './thanks-modal.css',
})
export class ThanksModal {
  emailService = inject(EmailForm);
  displayedEmail = signal<string>(this.emailService.email());

  handleDismiss() {
    this.emailService.updateEmail('');
    this.emailService.setIsEmailSent(false);
  }
}

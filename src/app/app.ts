import { Component, computed, inject, signal } from '@angular/core';
import { Newsletter } from './newsletter/newsletter';
import { EmailForm } from './services/email.service';
import { ThanksModal } from './thanks-modal/thanks-modal';

@Component({
  selector: 'app-root',
  imports: [Newsletter, ThanksModal],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  emailService = inject(EmailForm);

  visibleSection = computed(() => {
    if (this.emailService.isEmailSent()) {
      return 'submitted';
    } else {
      return 'form';
    }
  });
}

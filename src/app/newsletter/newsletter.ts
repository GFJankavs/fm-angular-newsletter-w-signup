import { Component, signal } from '@angular/core';
import { NewsletterForm } from '../newsletter-form/newsletter-form';

@Component({
  selector: 'app-newsletter',
  imports: [NewsletterForm],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css',
})
export class Newsletter {
  submittedEmail = signal<string | null>(null);

  handleSubmit(event: Event) {
    event?.preventDefault();
    console.log('event =>', event);
    // this.submittedEmail.set(event?.target.value());
  }
}

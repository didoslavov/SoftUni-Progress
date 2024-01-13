import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from '../../shared/constants';
import { AppEmailDirective } from '../../shared/validators/app-email.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, AppEmailDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  onRegister(form: NgForm): void {
    if (form.invalid) {
      return;
    }
  }
}

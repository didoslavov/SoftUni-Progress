import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppEmailDirective } from '../../shared/validators/app-email.directive';
import { DEFAULT_EMAIL_DOMAINS } from '../../shared/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, AppEmailDirective],
  templateUrl: './profile-edit.component.html',
  styleUrl: '../profile/profile.component.css',
})
export class ProfileEditComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(private router: Router) {}

  onCancel() {
    this.router.navigate(['/profile']);
  }
}

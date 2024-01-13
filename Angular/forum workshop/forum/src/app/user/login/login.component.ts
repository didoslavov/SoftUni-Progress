import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from '../../shared/constants';
import { AppEmailDirective } from '../../shared/validators/app-email.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, AppEmailDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(private userService: UserService, private router: Router) {}

  onLogin(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.userService.login();
    this.router.navigate(['/']);
  }
}

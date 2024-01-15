import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from '../../shared/constants';
import { AppEmailDirective } from '../../shared/validators/app-email.directive';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, AppEmailDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(private userService: UserService, private router: Router) {}

  onRegister(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { username, email, tel, password, rePassword } = form.value as {
      username: string;
      email: string;
      tel: string;
      password: string;
      rePassword: string;
    };

    this.userService
      .register(username, email, password, rePassword, tel)
      .subscribe((): Promise<boolean> => this.router.navigate(['/']));
  }
}

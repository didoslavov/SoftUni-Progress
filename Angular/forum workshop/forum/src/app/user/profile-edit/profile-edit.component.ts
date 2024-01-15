import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppEmailDirective } from '../../shared/validators/app-email.directive';
import { DEFAULT_EMAIL_DOMAINS } from '../../shared/constants';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../../types/user';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, AppEmailDirective],
  templateUrl: './profile-edit.component.html',
  styleUrl: '../profile/profile.component.css',
})
export class ProfileEditComponent implements OnInit {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  user: User | undefined;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  onCancel(): void {
    this.router.navigate(['/profile']);
  }

  onSave(username: string, email: string, tel?: string): void {
    this.userService
      .updateProfile(username, email, tel)
      .subscribe(() => this.router.navigate(['/profile']));
  }
}

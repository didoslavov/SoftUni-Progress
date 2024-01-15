import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get username(): string | undefined {
    return this.userService.user?.username;
  }

  onLogout(): void {
    this.userService
      .logout()
      .subscribe((): Promise<boolean> => this.router.navigate(['/']));
  }
}

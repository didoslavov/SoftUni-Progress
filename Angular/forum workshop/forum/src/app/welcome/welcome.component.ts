import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  constructor(private userService: UserService) {}

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }
}

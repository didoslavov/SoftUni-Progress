import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';
import { User } from '../../types/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  user: User | undefined = {
    _id: '',
    themes: [],
    posts: [],
    tel: '',
    email: '',
    username: '',
    password: '',
    created_at: '',
    updatedAt: '',
    __v: 0,
  };

  constructor(private userService: UserService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  onLogout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}

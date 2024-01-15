import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Profile } from '../../types/profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  profile: Profile = {
    username: '',
    email: '',
    tel: '',
  };
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const { username, email, tel } = this.userService.user!;
    this.profile = {
      username,
      email,
      tel,
    };
  }

  onEditClickHanlder(): void {
    this.router.navigate(['/profile-edit']);
  }
}

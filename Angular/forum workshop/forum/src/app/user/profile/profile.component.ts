import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../../types/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
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

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  onEditClickHanlder(): void {
    this.router.navigate(['/profile-edit']);
  }
}

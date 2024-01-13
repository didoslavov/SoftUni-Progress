import { Component, OnInit } from '@angular/core';
import { Theme } from '../types/theme';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css',
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  userId: string = '';

  constructor(private api: ApiService, private userService: UserService) {
    this.userId = this.userService.user?._id || '';
  }

  ngOnInit(): void {
    this.api.getThemes().subscribe({
      next: (themes: Theme[]) => {
        this.themes = themes;
      },
    });
  }

  onSubscribe(theme: Theme) {
    if (!theme.subscribers.includes(this.userId)) {
      this.api.subscribeTheme(theme._id).subscribe({
        next: (updatedTheme: Theme) => {
          const index = this.themes.findIndex(
            (t) => t._id === updatedTheme._id
          );
          this.themes[index] = updatedTheme;
        },
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Theme } from '../types/theme';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/dataService/data.service';
import { UserService } from '../user/user.service';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [RouterLink, WelcomeComponent],
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css',
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  userId: string = '';

  constructor(
    private dataService: ApiService,
    private userService: UserService
  ) {
    this.userId = this.userService.user?._id || '';
  }

  ngOnInit(): void {
    this.dataService.getThemes().subscribe({
      next: (themes: Theme[]): void => {
        this.themes = themes;
      },
    });
  }

  onSubscribe(theme: Theme) {
    if (!theme.subscribers.includes(this.userId)) {
      this.dataService.subscribeTheme(theme._id).subscribe({
        next: (updatedTheme: Theme): void => {
          const index = this.themes.findIndex(
            (t): boolean => t._id === updatedTheme._id
          );
          this.themes[index] = updatedTheme;
        },
      });
    }
  }
}

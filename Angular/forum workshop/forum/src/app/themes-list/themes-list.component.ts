import { Component, OnInit } from '@angular/core';
import { Theme } from '../types/theme';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [],
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css',
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe({
      next: (themes: Theme[]) => {
        this.themes = themes;
      },
    });
  }
}

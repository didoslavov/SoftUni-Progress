import { Component, OnInit } from '@angular/core';
import { Theme } from '../../types/theme';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme-content',
  standalone: true,
  imports: [],
  templateUrl: './theme-content.component.html',
  styleUrl: './theme-content.component.css',
})
export class ThemeContentComponent implements OnInit {
  themeId: string = '';
  theme: Theme | null = null;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.themeId = params['themeId'];

      this.api.getTheme(this.themeId).subscribe({
        next: (theme: Theme) => {
          this.theme = theme;
        },
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Theme } from '../../types/theme';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/dataService/data.service';
import { WelcomeComponent } from '../../welcome/welcome.component';

@Component({
  selector: 'app-theme-content',
  standalone: true,
  imports: [WelcomeComponent],
  templateUrl: './theme-content.component.html',
  styleUrl: './theme-content.component.css',
})
export class ThemeContentComponent implements OnInit {
  themeId: string = '';
  theme: Theme | null = null;

  constructor(private dataService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params): void => {
      this.themeId = params['themeId'];

      this.dataService.getTheme(this.themeId).subscribe({
        next: (theme: Theme): void => {
          this.theme = theme;
        },
      });
    });
  }
}

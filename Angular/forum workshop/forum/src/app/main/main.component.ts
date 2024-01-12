import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/Post';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  themes: Theme[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAll().subscribe({
      next: (themes) => {
        this.themes = themes;
      },
    });
  }
}

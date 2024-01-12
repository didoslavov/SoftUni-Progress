import { Component } from '@angular/core';
import { ThemesListComponent } from '../themes-list/themes-list.component';
import { PostsComponent } from '../posts-list/posts-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ThemesListComponent, PostsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}

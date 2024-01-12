import { Component, OnInit } from '@angular/core';
import { Post } from '../types/Post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent implements OnInit {
  posts: Post[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getLatest().subscribe({
      next: (posts) => {
        this.posts = posts;
        console.log(this.posts);
      },
    });
  }
}

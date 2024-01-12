import { Component, OnInit } from '@angular/core';
import { Post } from '../types/post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPosts(5).subscribe({
      next: (posts) => {
        this.posts = posts;
      },
    });
  }
}

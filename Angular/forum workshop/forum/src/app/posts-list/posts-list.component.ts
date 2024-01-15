import { Component, OnInit } from '@angular/core';
import { Post } from '../types/post';
import { ApiService } from '../services/dataService/data.service';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private dataService: ApiService) {}

  ngOnInit(): void {
    this.dataService.getPosts(5).subscribe({
      next: (posts): void => {
        this.posts = posts;
      },
    });
  }
}

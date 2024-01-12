import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from './types/Theme';
import { Post } from './types/Post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Theme[]> {
    return this.http.get<Theme[]>('http://localhost:3000/api/themes');
  }

  getLatest(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/api/posts?limit=5');
  }
}

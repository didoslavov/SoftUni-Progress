import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../../types/theme';
import { Post } from '../../types/post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>('/themes');
  }

  getTheme(themeId: string): Observable<Theme> {
    return this.http.get<Theme>(`/themes/${themeId}`);
  }

  subscribeTheme(themeId: string): Observable<Theme> {
    return this.http.put<Theme>(`/themes/${themeId}}`, null);
  }

  getPosts(limit?: number): Observable<Post[]> {
    return this.http.get<Post[]>(`/posts${limit ? `?limit=${limit}` : ''}`);
  }
}

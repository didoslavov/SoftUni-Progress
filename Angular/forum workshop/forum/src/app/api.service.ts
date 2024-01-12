import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from './types/theme';
import { Post } from './types/post';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(environment.apiUrl + '/themes');
  }

  getTheme(themeId: string): Observable<Theme> {
    return this.http.get<Theme>(environment.apiUrl + `/themes/${themeId}`);
  }

  getPosts(limit?: number): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${environment.apiUrl}/posts${limit ? `?limit=${limit}` : ''}`
    );
  }
}

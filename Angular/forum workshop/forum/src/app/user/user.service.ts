import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/storage/local-storage.service';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: User | undefined;
  private readonly USER_KEY = '[user]';

  get user(): User | undefined {
    return this._user;
  }

  get isLoggedIn(): boolean {
    return !!this._user;
  }

  constructor(private localStorage: LocalStorageService) {
    try {
      const lsUser = this.localStorage.getItem(this.USER_KEY);
      this._user = lsUser ? JSON.parse(lsUser) : undefined;
    } catch (e) {
      console.error('Error initializing UserService:', e);
    }
  }

  login(): void {
    this._user = {
      _id: 'some25210fake10382id',
      email: 'dido@abv.bf',
      username: 'dido',
      themes: [],
      posts: [],
      tel: '+359892349542',
      password: 'some201fake245password',
      created_at: '2024-11-01T07:17:27.217Z',
      updatedAt: '2024-12-01T07:17:27.217Z',
      __v: 1,
    };

    this.localStorage.setItem(this.USER_KEY, JSON.stringify(this._user));
  }

  logout(): void {
    this._user = undefined;
    this.localStorage.removeItem(this.USER_KEY);
  }
}

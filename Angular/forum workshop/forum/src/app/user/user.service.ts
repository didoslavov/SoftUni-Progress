import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(
      (u): User | undefined => (this.user = u)
    );
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>('/login', { email, password })
      .pipe(tap((u): void => this.user$$.next(u)));
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string,
    tel: string
  ): Observable<User> {
    return this.http
      .post<User>('/register', {
        username,
        email,
        password,
        rePassword,
        tel,
      })
      .pipe(tap((u): void => this.user$$.next(u)));
  }

  logout(): Observable<User> {
    return this.http
      .post<User>('/logout', {})
      .pipe(tap((): void => this.user$$.next(undefined)));
  }

  getProfile(): Observable<User> {
    return this.http
      .get<User>('/users/profile')
      .pipe(tap((u): void => this.user$$.next(u)));
  }

  updateProfile(
    username: string,
    email: string,
    tel?: string
  ): Observable<User> {
    return this.http
      .put<User>('/users/profile', {
        username,
        email,
        tel,
      })
      .pipe(tap((u): void => this.user$$.next(u)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

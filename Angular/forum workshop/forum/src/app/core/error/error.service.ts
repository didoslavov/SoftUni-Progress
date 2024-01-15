import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiError } from '../../types/apiError';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  apiError$$ = new BehaviorSubject<ApiError | null>(null);

  constructor() {}

  setError(err: ApiError | null): void {
    this.apiError$$.next(err);
  }
}

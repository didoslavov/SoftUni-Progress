import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { ApiError } from '../../types/apiError';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent implements OnInit {
  apiError$ = this.errorService.apiError$$.asObservable();
  errorMessage: string | undefined;

  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.apiError$.subscribe(
      (err: ApiError | null) => (this.errorMessage = err?.message)
    );
  }
}

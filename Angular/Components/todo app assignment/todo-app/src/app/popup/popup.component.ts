import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent {}

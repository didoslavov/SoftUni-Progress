import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent implements OnInit {
  @Input() showPopup: boolean = true;

  constructor(public editService: EditService) {}

  ngOnInit(): void {
    console.log(this.editService.showPopup);
  }
}

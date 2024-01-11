import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
import { Todo } from '../types/Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ButtonComponent, CommonModule, FormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent implements OnInit {
  showPopup: boolean = false;
  todo: Todo | null = null;
  todoValue: string = '';

  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getShowPopup().subscribe((showPopup) => {
      this.showPopup = showPopup;
    });

    this.todoService.getSelectedTodo().subscribe((selectedTodo) => {
      this.todo = selectedTodo;
      this.todoValue = selectedTodo?.todo || '';
    });
  }

  onUpdate() {
    if (this.todo) {
      if (this.todoValue !== this.todo.todo) {
        this.todo.todo = this.todoValue;
        this.todoService.updateTodo(this.todo);
      }

      this.todoService.hideEditPopup();
    }
  }

  onClose() {
    this.todoService.hideEditPopup();
  }
}

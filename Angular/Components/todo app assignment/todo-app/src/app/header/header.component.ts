import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';
import { Todo } from '../types/Todo';
import { todos } from '../todos';
import { Subscription } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  todos: Todo[] = [];

  constructor(public todoService: TodoService) {}

  onAddTodo(input: HTMLInputElement) {
    if (input.value.trim() == '') {
      return;
    }
    this.todoService.addTodo(input.value);
    input.value = '';
  }
}

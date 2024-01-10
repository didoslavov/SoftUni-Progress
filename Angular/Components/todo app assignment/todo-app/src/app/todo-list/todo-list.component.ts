import { Component, Input } from '@angular/core';
import { Todo } from '../types/Todo';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { todos } from '../todos';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() todos: Todo[] = todos;
}

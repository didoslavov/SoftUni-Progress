import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';
import { Todo } from '../types/Todo';
import { todos } from '../todos';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() todos: Todo[] = todos;

  addTodo(input: HTMLInputElement) {
    todos.push({ todo: input.value, completed: false });
  }
}

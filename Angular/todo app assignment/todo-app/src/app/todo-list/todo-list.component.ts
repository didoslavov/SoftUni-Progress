import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../types/Todo';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  private todosSubscription: Subscription | undefined;

  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.todosSubscription = this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  ngOnDestroy() {
    if (this.todosSubscription) {
      this.todosSubscription.unsubscribe();
    }
  }

  onEditClickShowPopup(todo: Todo) {
    this.todoService.showEditPopup(todo);
  }

  onTodoConfirm(todo: Todo) {
    this.todoService.confirmTodo(todo);
  }

  onDelete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}

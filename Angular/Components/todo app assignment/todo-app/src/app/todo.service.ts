import { Injectable } from '@angular/core';
import { Todo } from './types/Todo';
import { todos } from './todos';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosSubject = new BehaviorSubject<Todo[]>(todos);
  private showPopupSubject = new BehaviorSubject<boolean>(false);
  private selectedTodoSubject = new BehaviorSubject<Todo | null>(null);

  getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  getSelectedTodo(): Observable<Todo | null> {
    return this.selectedTodoSubject.asObservable();
  }

  getShowPopup(): Observable<boolean> {
    return this.showPopupSubject.asObservable();
  }

  addTodo(todo: string) {
    this.todosSubject.value.push({ todo, completed: false });
    this.updateTodos();
  }

  confirmTodo(todo: Todo) {
    todo.completed = !todo.completed;
    this.updateTodos();
  }

  showEditPopup(todo: Todo) {
    this.selectedTodoSubject.next(todo);
    this.showPopupSubject.next(true);
  }

  hideEditPopup() {
    this.showPopupSubject.next(false);
    this.selectedTodoSubject.next(null);
  }

  updateTodo(todo: Todo) {
    const updatedTodos = this.todosSubject.value.map((t) =>
      t === this.selectedTodoSubject.value ? { ...t, ...todo } : t
    );

    this.updateTodos(updatedTodos);
  }

  deleteTodo(todo: Todo) {
    const updatedTodos = this.todosSubject.value.filter((t) => t !== todo);
    this.updateTodos(updatedTodos);
  }

  private updateTodos(updatedTodos?: Todo[]) {
    this.todosSubject.next(updatedTodos || [...this.todosSubject.value]);
  }
}

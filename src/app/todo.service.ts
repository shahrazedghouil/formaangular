import { Injectable } from '@angular/core';
import { Todo } from './Modele/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos =  [
      new Todo('lundi', 'angular'),
      new Todo('mardi', 'spring'),
    ]
   }
   getTodos() {
     return this.todos;
   }
   addTodo(todo: Todo) {
     this.todos.push(todo);
   }
   deleteTodo(todo:Todo) {
     const index = this.todos.indexOf(todo);
     if(index> -1) {
       this.todos.splice(index, 1);
     }

   }
}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../Modele/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo []; 
  title = '';
  content = '';
  constructor(private todoService: TodoService) {
     this.todos = this.todoService.getTodos();
   }

  ngOnInit() {
  }
  addTodo() {
    this.todoService.addTodo(new Todo(this.title, this.content));
    this.title = '';
    this.content = '';
  }
  deleteTodo(todo) {
    this.todoService.deleteTodo(todo);
  }

}

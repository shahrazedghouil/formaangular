import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Modele/Personne';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [TodoService]
})
export class CvComponent implements OnInit {
personnes: Personne [];
selectedPersonne: Personne;
  constructor(private todoService: TodoService) { }
  ngOnInit() {
    
     
    ;
  }
  selectPersonne(personne){
    this.selectedPersonne = personne;
  }
  logTodo() {
    console.log(this.todoService.getTodos());  
  }
}

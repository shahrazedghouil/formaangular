import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Modele/Personne';


@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
@Input () personne: Personne;
@Output () selectedPersonne = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  selectPersonne(){
    // Todo Emmettre un evennemet et y injecter la personne
    this.selectedPersonne.emit(this.personne);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  teams = [
    'est',
    'om',
    'barca',
    'milan', 
  ];
est = false;
barca = false;
milan = true;
  constructor() { }

  ngOnInit() {
  }
  changeTeam(){
    this.est = true;
    this.milan = false;
    this.barca = false;
  }

}

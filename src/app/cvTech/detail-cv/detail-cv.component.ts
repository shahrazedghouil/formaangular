import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/Modele/Personne';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
@Input () personne: Personne;
  constructor() { }

  ngOnInit() {
  
  }
  embaucher(){
    
  }

}

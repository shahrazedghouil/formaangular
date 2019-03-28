import { Injectable } from '@angular/core';
import { Personne } from '../Modele/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne [];
  
  constructor() { 
    this.personnes = [
      new Personne(1,'ghouil','shahrazed', 27,'img.jpg','developper',3333333),
      new Personne(2,'Badri','Anis', 27,'badri.png','football player',222223)
    ] ;
  }
}

export class Personne {
    id:number;
    name:string;
    firstname:string;
    age:number;
    path:string;
    cin:number;
    job:string;
   constructor (id = 0,name = '',firstname = '', age = 0,path = '',job = '',cin = 1){
     this.id = id;
     this.name= name;
     this.firstname =firstname;
     this.age = age;
     this.path = path;
     this.cin = cin;
     this.job = job; 
   }
  }
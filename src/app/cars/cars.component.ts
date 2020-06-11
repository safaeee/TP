import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  data= {
    marque: null,
    matricule: null,
    siege: null,
    couleur: null,
    image:null
  }
  
  itemList:AngularFireList<any>
    constructor(public db:AngularFireDatabase) {
      this.itemList=db.list("voitures")
     }
  
   
  Ajouter(){
    this.itemList.push(
      {
        marque:this.data.marque,
        matricule:this.data.matricule,
        siege:this.data.siege,
        couleur:this.data.couleur,
        image:this.data.image,
        
      }) 
    
  }
  ngOnInit() {
    console.log(this.data.marque)   
    }
  }
  

  
}

import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  public pais =''

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
  }

  peliculaSeleccionada(pais:any){
    this.pais = pais.nombre;
  }

  save(){
   console.log("SAVE!")
  }

}

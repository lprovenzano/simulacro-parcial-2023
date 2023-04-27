import { Pelicula } from './../../classes/pelicula';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  eventoPeliculaDetalle: Pelicula | undefined

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarPelicula(pelicula: any){
    this.eventoPeliculaDetalle = pelicula;
  }

}

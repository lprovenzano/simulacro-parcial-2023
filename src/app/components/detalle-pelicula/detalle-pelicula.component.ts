import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input()
  pelicula: Pelicula | undefined

  constructor() { }

  ngOnInit(): void {
  }

  getActores(){
    return this.pelicula?.actores[0].nombre + ' ' + this.pelicula?.actores[0].apellido
  }

}

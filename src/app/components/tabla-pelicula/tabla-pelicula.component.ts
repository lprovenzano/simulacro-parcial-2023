import { Pelicula } from './../../classes/pelicula';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  @Input()
  peliculas: any[] | undefined

  @Output()
  eventoPelicula = new EventEmitter<Pelicula>;

  constructor() {

  }

  ngOnInit(): void {
  }

  emitDetallePelicula(pelicula:Pelicula){
    this.eventoPelicula.emit(pelicula)
  }
}

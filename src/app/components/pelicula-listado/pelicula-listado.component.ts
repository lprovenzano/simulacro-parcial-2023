import { Pelicula } from './../../classes/pelicula';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {

  peliculas: Pelicula[] = []

  @Output()
  eventoDetallePelicula = new EventEmitter<Pelicula>;

  constructor() {
   }

  ngOnInit(): void {
    const pelicula = new Pelicula(1, "The Office", "test", "2000-01-01", 90222112, "https://es.web.img3.acsta.net/pictures/14/02/04/13/20/128334.jpg")
    const pelicula2 = new Pelicula(2, "Peaky Blinders", "test", "2000-01-01", 1234543543, "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg")
    this.peliculas.push(pelicula)
    this.peliculas.push(pelicula2)
  }

  verDetallePelicula(pelicula:any){
    this.eventoDetallePelicula.emit(pelicula)
  }

}

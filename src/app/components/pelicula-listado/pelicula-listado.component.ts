import { Pelicula } from './../../classes/pelicula';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {

  public peliculas!: Observable<any[]>;

  @Output()
  eventoDetallePelicula = new EventEmitter<Pelicula>;

  constructor(private firebase: FirebaseService) {
   }

  ngOnInit(): void {
    this.peliculas = this.firebase.get('peliculas')
  }

  verDetallePelicula(pelicula:any){
    this.eventoDetallePelicula.emit(pelicula)
  }

}

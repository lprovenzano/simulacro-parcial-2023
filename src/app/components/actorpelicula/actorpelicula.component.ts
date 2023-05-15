import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actorpelicula',
  templateUrl: './actorpelicula.component.html',
  styleUrls: ['./actorpelicula.component.scss']
})
export class ActorpeliculaComponent implements OnInit {

  peliculasActorSeleccionadas: any[] = []
  actorSeleccionado: any;

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
  }

  getPeliculasByActor(actor:any){
    this.actorSeleccionado = actor;
      this.firebase.get("peliculas")
      .subscribe(p => {
        this.peliculasActorSeleccionadas = p.filter((x:any) => x.actores.find((a:any) => a.id == actor.id))
      })
  }

}

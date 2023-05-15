import { Actor } from './../../classes/actor';
import { FirebaseService } from './../../services/firebase.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  public actores!: Observable<any[]>;

  @Output()
  eventoActor = new EventEmitter<any>;

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
    this.actores = this.firebase.get("actores")
  }

  seleccionarActor(actor:any){
      this.eventoActor.emit(actor);
  }

}

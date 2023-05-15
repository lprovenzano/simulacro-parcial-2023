import { Actor } from './../../classes/actor';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  public pais =''
  public myForm!: FormGroup;
  public sentForm!:boolean;

  constructor(private firebase: FirebaseService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      nation: ['', [Validators.minLength(3)]]
    });
  }

  peliculaSeleccionada(pais:any){
    this.pais = pais.nombre;
  }

  onSubmit() {
    if (this.myForm?.valid) {
      const actor = new Actor('',this.myForm.value.firstName, this.myForm.value.lastName, this.pais)
      this.firebase.save("actores", actor)
      this.sentForm = true;
    } else {
      this.sentForm = false;
    }
  }

}

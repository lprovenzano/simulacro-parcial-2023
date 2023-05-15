import { Pelicula } from 'src/app/classes/pelicula';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {
  public myForm!: FormGroup;
  public sentForm!:boolean;
  public url!:string;
  public actorSeleccionado: any;
  selectedImage: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private firebase: FirebaseService) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      release: ['', [Validators.required]],
      viewers: ['', [Validators.required, Validators.min(1)]],
      image: ['', Validators.required],
      actor: ['', Validators.minLength(3)],
    });
  }

  getActorSeleccionado(){
    if(this.actorSeleccionado){
      return this.actorSeleccionado.nombre + " " + this.actorSeleccionado.apellido
    }
    return ""
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedImage = file;
  }

  getImageUrl(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (this.selectedImage) {
        const filePath = `images/${this.selectedImage.name}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, this.selectedImage);
        task.then(() => {
          fileRef.getDownloadURL().subscribe((url:any) => {
            resolve(url);
            console.log('URL de la imagen (promise):', url);
          });
        });
    }});
  }

  onSubmit(){
      if (this.myForm?.valid) {
        this.sentForm = true;
        this.getImageUrl().then( result => {
          const pelicula = new Pelicula('',
          this.myForm.value.name,
          this.myForm.value.type,
          this.myForm.value.release,
          this.myForm.value.viewers,
          result)
          pelicula.actores.push(this.actorSeleccionado)
          this.firebase.save("peliculas", pelicula)
        })
      } else {
        this.sentForm = false;
      }
  }

  seleccionarActor($event: any) {
   this.actorSeleccionado = $event;
    }

}

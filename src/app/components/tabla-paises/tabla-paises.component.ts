import { PaisService } from './../../services/pais.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  paises:any[] = [];
  paisesSeleccionados:any[] = []

  @Output()
  eventoPais = new EventEmitter<any>;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
   this.paisService.getAll().subscribe(
    (x: any[]) => {
      this.paises = x;
      let cantidad = 0;
      while(cantidad < 3){
        this.obtenerUnPaisCualquiera()
        cantidad++;
      }
    });
  }

  obtenerUnPaisCualquiera(){
    const pais = this.paises.at(this.getRandom(0, this.paises.length));
    const nombre = pais.translations.spa.common
    const bandera = pais.flags.png
    this.paisesSeleccionados.push({nombre: nombre, bandera: bandera})
  }

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  seleccionarPais(pais:any){
    this.eventoPais.emit(pais)
  }

}

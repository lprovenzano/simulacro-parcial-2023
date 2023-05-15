import { Pais } from './pais';
export class Actor {
  public id: string
  public nombre: string
  public apellido: string
  public pais: Pais;

  /**
   *
   */
  constructor(
    id: string,
    nombre: string,
    apellido: string,
    pais: Pais) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }
}

export class Actor {
  public id: string
  public nombre: string
  public apellido: string
  public pais: string;

  /**
   *
   */
  constructor(
    id: string,
    nombre: string,
    apellido: string,
    pais: string,) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }
}

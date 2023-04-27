export class Pelicula {
  public id: Number
  public nombre: string
  public tipo: string
  public fechaEstreno: string
  public cantidadPublico: Number
  public urlFoto: string

  constructor(
    id: Number,
    nombre: string,
    tipo: string,
    fechaEstreno: string,
    cantidadPublico: Number,
    urlFoto: string
) {
    this.id = id
    this.nombre = nombre
    this.tipo = tipo
    this.fechaEstreno = fechaEstreno
    this.cantidadPublico = cantidadPublico
    this.urlFoto = urlFoto
  }
}

import { Actor } from "./actor"

export class Pelicula {
  public id: string
  public nombre: string
  public tipo: string
  public fechaEstreno: string
  public cantidadPublico: Number
  public urlFoto: string
  public actores: Actor[]

  constructor(
    id: string,
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
    this.actores = []
  }
}

import RegistroAutomotor from "./index.js";
import * as ReadLineSync from 'readline-sync';

class Moto {
  private marca: string;
  private modelo: string;
  private año: number;
  private color: string;

  constructor(marca:string, modelo: string, año: number, color: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
  }

  encenderMoto() {
    console.log("Brrrr")
  }
}

let listaMotos: Array<Moto> = []

class RegistroDeMotos extends RegistroAutomotor {
  constructor() {
    super('Avenida Santagada 1000', true, listaAutos)
  }
}
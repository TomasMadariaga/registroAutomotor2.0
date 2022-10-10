import * as ReadlineSync from 'readline-sync';


class Auto {
 
private marca: string
private modelo: string
private año: number
private color: string

constructor(marca: string, modelo: string, año: number, color: string){
  this.marca = marca
  this.modelo = modelo
  this.año = año
  this.color = color
}

autoEncendido() {
  console.log('rum rum')
}
 
}

class RegistroAutomotor {
  private direccion: string;
  private abierto: boolean;
  private autos: Array<Auto>;
  public constructor(direccion: string, abierto: boolean, autos: Array<Auto>) {
      this.direccion = direccion;
      this.abierto = abierto;
      this.autos = autos;
  }
  public mostrarRegistro(): void {
      console.log(this.direccion);
      console.log(this.abierto);
      console.log(this.autos);
  }
  crearAuto(auto: string, arrayAuto: Array<Auto>): void {
      let propiedadAuto: string[] = auto.split(',')
      let marca: string = propiedadAuto[0]
      let modelo: string = propiedadAuto[1]
      let año: number = Number(propiedadAuto[2])
      let color: string = propiedadAuto[3]
      let nuevoAuto: Auto = new Auto(marca, modelo, año, color)
      arrayAuto.push(nuevoAuto)
  }
  borrarAuto(arrayAuto: Array<Auto>, posicion: number): void {
      delete arrayAuto[posicion]
  }
  modificarAuto(arrayAuto: Array<Auto>, posicion: number): void {
      let marca: string = ReadlineSync.question("Ingrese la marca del auto: ")
      let modelo: string = ReadlineSync.question("Ingrese el modelo del auto: ")
      let año: number = ReadlineSync.questionInt("Ingrese el año de fabricación del auto: ")
      let color: string = ReadlineSync.question("Ingrese el color del auto: ")
      let autoModificado: Auto = new Auto(marca, modelo, año, color)
      delete arrayAuto[posicion]
      arrayAuto[posicion] = autoModificado
  }
}

let listaAutos: Array<Auto> = [];
let registro: RegistroAutomotor = new RegistroAutomotor("Avenida Santagada 1900", true, listaAutos)
registro.mostrarRegistro();

registro.crearAuto("volkswagen,gol,2014,gris", listaAutos)
registro.crearAuto("volkswagen,golf,2015,negro", listaAutos)
registro.crearAuto("chevrolet,cruze,2015,blanco", listaAutos)
registro.crearAuto("fiat,multipla,2008,rojo", listaAutos)
registro.mostrarRegistro()
registro.modificarAuto(listaAutos, 0)
registro.mostrarRegistro()

export default RegistroAutomotor;
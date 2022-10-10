"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }
    Auto.prototype.autoEncendido = function () {
        console.log('rum rum');
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(direccion, abierto, autos) {
        this.direccion = direccion;
        this.abierto = abierto;
        this.autos = autos;
    }
    RegistroAutomotor.prototype.mostrarRegistro = function () {
        console.log(this.direccion);
        console.log(this.abierto);
        console.log(this.autos);
    };
    RegistroAutomotor.prototype.crearAuto = function (auto, arrayAuto) {
        var propiedadAuto = auto.split(',');
        var marca = propiedadAuto[0];
        var modelo = propiedadAuto[1];
        var año = Number(propiedadAuto[2]);
        var color = propiedadAuto[3];
        var nuevoAuto = new Auto(marca, modelo, año, color);
        arrayAuto.push(nuevoAuto);
    };
    RegistroAutomotor.prototype.borrarAuto = function (arrayAuto, posicion) {
        delete arrayAuto[posicion];
    };
    RegistroAutomotor.prototype.modificarAuto = function (arrayAuto, posicion) {
        var marca = ReadlineSync.question("Ingrese la marca del auto: ");
        var modelo = ReadlineSync.question("Ingrese el modelo del auto: ");
        var año = ReadlineSync.questionInt("Ingrese el año de fabricación del auto: ");
        var color = ReadlineSync.question("Ingrese el color del auto: ");
        var autoModificado = new Auto(marca, modelo, año, color);
        delete arrayAuto[posicion];
        arrayAuto[posicion] = autoModificado;
    };
    return RegistroAutomotor;
}());
var listaAutos = [];
var registro = new RegistroAutomotor("Avenida Santagada 1900", true, listaAutos);
registro.mostrarRegistro();
registro.crearAuto("volkswagen,gol,2014,gris", listaAutos);
registro.crearAuto("volkswagen,golf,2015,negro", listaAutos);
registro.crearAuto("chevrolet,cruze,2015,blanco", listaAutos);
registro.crearAuto("fiat,multipla,2008,rojo", listaAutos);
registro.mostrarRegistro();
registro.modificarAuto(listaAutos, 0);
registro.mostrarRegistro();
exports["default"] = RegistroAutomotor;
listaAutos;

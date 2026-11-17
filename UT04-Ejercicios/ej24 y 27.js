/*
function Vehiculo(color, marca, modelo, velocidadMaxima) {
  this.color = color;
  this.marca = marca;
  this.modelo = modelo;
  this.velocidadMaxima = velocidadMaxima;

  this.comenzar = function () {
    console.log("Encender motor");
  };

  this.parar = function () {
    console.log("Apagar motor");
  };

  this.distanciaMax = function (tiempo) {
    return this.velocidadMaxima * tiempo;
  };
}

const miCoche = new Vehiculo("Negro", "Volkswagen", "Jetta", 178);

miCoche.comenzar();
console.log("Distancia máxima en 2 horas:", miCoche.distanciaMax(2), "km");
miCoche.parar();
*/

class Vehiculo2 {
  constructor(color, marca, modelo, velocidadMaxima) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadMaxima = velocidadMaxima;
  }

  comenzar() {
    console.log("Encender motor");
  }

  parar() {
    console.log("Apagar motor");
  }

  distanciaMax(tiempo) {
    return this.velocidadMaxima * tiempo;
  }
}

const miCoche2 = new Vehiculo2("Blanco", "BMW", "e-36", 220);

miCoche2.comenzar();
console.log("Distancia máxima en 3 horas:", miCoche2.distanciaMax(3), "km");
miCoche2.parar();

// EJ 27

class Coche extends Vehiculo2 {
  constructor(color, marca, modelo) {
    super(color, marca, modelo, 120);
  }

  parar() {
    console.log("Aparcar");
  }
}

const miChoche3 = new Coche("Azul", "Mercedes", "GT-63s");
miChoche3.comenzar();
console.log("Distancia maxima en 8 horas:", miChoche3.distanciaMax(8), "km");
miChoche3.parar();

class Avion extends Vehiculo2 {
  constructor(color, marca, modelo) {
    super(color, marca, modelo, 1000);
  }

  comenzar() {
    console.log("Despegar");
  }

  parar() {
    console.log("Aterrizar");
  }
}

const miAvion1 = new Avion("Blanco", "Airbus", "A-320");
miAvion1.comenzar();
console.log("Distancia maxima en 12 horas:", miAvion1.distanciaMax(12), "km");
miAvion1.parar();

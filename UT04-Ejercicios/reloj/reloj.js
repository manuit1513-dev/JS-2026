function Reloj({ plantilla }) {
  let temporalizador;

  function mostrar() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = plantilla
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  this.stop = function () {
    clearInterval(temporalizador);
  };

  this.start = function () {
    mostrar();
    temporalizador = setInterval(mostrar, 1000);
  };
}

let miReloj = new Reloj({ plantilla: "h:m:s" });
miReloj.start();

class claseReloj {
  constructor(plantilla, temporalizador) {
    this.plantilla = plantilla;
    this.temporalizador = null;
  }

  mostrar() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.plantilla
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.temporalizador);
  }

  start() {
    this.mostrar();
    this.temporalizador = setInterval(() => this.mostrar(), 1000);
  }
}

let miReloj2 = new claseReloj("h:m:s");
miReloj2.start();

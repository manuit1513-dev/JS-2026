// =====================================================================
// UT03 - Actividad evaluable: Mi ficha personal
// Alumno/a: ...........................................
// Para mostrar resultados en la página usa mostrar("<p>texto</p>").
// =====================================================================

// Objeto con los datos de la ficha (ver apartado 0 del enunciado).
// Se completa en los apartados 1, 2 y 3 y lo usan los apartados 4 y 5.
// Se declara con var (no con let ni const) para que la ventana hija
// pueda acceder a ella con window.opener.ficha.
var ficha = {};

// 1. STRING ------------------------------------------------------------
function analizarNombre() {
  mostrar("<h2>1. Nombre</h2>");
  //1.1
  let nombre = prompt("Introduzca su nombre: ");
  while (nombre == null || nombre == "") {
    nombre = prompt("Introduzca su nombre: ");
  }

  //mostrar nombre normal "Manuel David Garcia Prado";
  //1.2
  let palabras12 = nombre.split(" ");
  let nombreSinEspacios = [];
  for (const palabra of palabras12) {
    if (palabra !== " ") {
      nombreSinEspacios.push(palabra);
    }
  }

  let mayuscula;
  let minusculas;
  let palabraBuena = [];
  for (const palabra of nombreSinEspacios) {
    let primeraLetra = palabra.slice(0, 1);
    mayuscula = primeraLetra.toUpperCase();
    minusculas = palabra.slice(1);

    palabraBuena += mayuscula + minusculas + " ";
  }

  ficha.nombre = palabraBuena;

  mostrar(`<p>1. Nombre ok: ${palabraBuena}</p>`);

  //1.3
  //mostrar solo iniciales ("MDGP"), nº de letras sin espacios y nombre al reves
  let palabras13 = palabraBuena.trim().split(" ");
  let iniciales = [];
  let contador = 0;
  let nombreRev = [];
  let palabraSeparada;
  let nombreRevString;
  for (const palabra of palabras13) {
    for (let i = 0; i < palabra.length; i++) {
      contador++;
    }
    iniciales += palabra[0];

    /*
    palabraSeparada = palabra.split("");
    nombreRev += palabraSeparada.reverse();
    console.log(nombreRev);
    nombreRevString = nombreRev.join("");
    */
    nombreRevString = palabraBuena.split("").reverse().join("");
  }
  //1.4 primeras 4 letras del 1 apellido, inicial de mi nombre y 3 ultimos digitos del dni
  let dni = prompt("Introduzca su DNI: ");
  let palabras14 = palabraBuena.toLowerCase().split(" ");
  if (palabras14[1].length < 4) {
    palabras14[1] = palabras14[1].padEnd(4, "x");
  }
  let nombreDNI =
    palabras14[1].slice(0, 4) + palabras14[0].slice(0, 1) + dni.slice(-5, -1);
  ficha.usuario = nombreDNI;

  mostrar(`<p>Iniciales: ${iniciales}</p>`);
  mostrar(`<p>Numero de letras: ${contador}</p>`);
  mostrar(`<p>Nombre al reves : ${nombreRevString}</p>`);
  mostrar(`<p>Nombre con DNI: ${ficha.usuario}</p>`);
}

// 2. NUMBER Y MATH -----------------------------------------------------
function analizarNumeros() {
  mostrar("<h2>2. Números</h2>");
  let fechaNacimiento = prompt(
    "Ingresa tu fecha de nacimiento en formato dd/mm/aaaa"
  );
  ficha.textoNacimiento = fechaNacimiento;
  let fechaArray = fechaNacimiento.split("/");
  let fechaBiOcHex;
  let dia;
  let mes;
  let año;
  let diaBi;
  let mesOc;
  let añoHex;
  dia = fechaArray[0];
  diaBi = dia.toString(2);
  mes = fechaArray[1];
  mesOc = mes.toString(8);
  año = fechaArray[2];
  añoHex = año.toString(16);
  fechaBiOcHex = diaBi + "/" + mesOc + "/" + añoHex;
  mostrar(`<p>Fecha transformada: ${fechaBiOcHex}</p>`);
}

// 3. DATE --------------------------------------------------------------
function analizarFechas() {
  mostrar("<h2>3. Fechas</h2>");
  // Tu código aquí
}

// 4. VENTANAS ----------------------------------------------------------
let ventanaHija = null;

function abrirVentana() {
  mostrar("<h2>4. Ventanas</h2>");
  // Tu código aquí
}

// La ventana hija llama a esta función con window.opener.recibirMensaje(texto)
function recibirMensaje(texto) {
  // Tu código aquí
}

// 5. ALMACENAMIENTO ----------------------------------------------------
function guardarFicha() {
  mostrar("<h2>5. Guardar ficha</h2>");
  // Tu código aquí
}

// A) Arrays, huecos y valores por defecto
//let [a, , b = 10, c = 20, d] = [5, 99, undefined, 4];
//console.log(a, b, c, d);
/*
a => 5
b => 10
c => 4
d => undefined
*/

// B) Intercambio de variables y rest
let x = 1,
  y = 2;
[x, y] = [y, x];
let [primero, ...resto] = [x, y, 3, 4];
//console.log(primero, resto);

// 2 [1,3,4]

// C) Spread y copia superficial
let alum = { nombre: "Lucía", notas: [7, 8], datos: { curso: "2º DAW" } };
let copia = { ...alum, nombre: "Marcos" };
copia.datos.curso = "1º DAW";
//console.log(alum.nombre, alum.datos.curso);

// Lucia, 1º DAW(porque solo hace copia superficial por lo que si afecta a la direccion de memoria)

// D) Combinar objetos
let base = { tema: "oscuro", idioma: "es", notificaciones: true };
let usuario = { idioma: "en", rol: "admin" };
let config = { ...base, ...usuario };
//console.log(config);

// tema: "oscuro", idioma: "en", notificaciones: true, rol: "admin"

let colores = ["rojo", "verde", "azul", "negro"];
let [primero2, ...otros] = colores;
//console.log(primero2, otros);

let a = 1,
  b = 2,
  c = 3;
[a, b, c] = [c, a, b];
//console.log(a, b, c);

let libro = { titulo: "Dune", autor: "Herbert", anio: 1965 };
let { titulo: nombre, paginas = 3000, ...otros2 } = libro;
//console.log(nombre, paginas, otros2);

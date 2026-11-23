/*
Crea una función copiaOrdenadaNumeros(arr) que reciba un array de números y
devuelva una copia ordenada de mayor a menor usando [...arr].sort(...), sin modificar el array original.
Crea una función separarExtremos(arr) que, dado un array de al menos 2 elementos,
use desestructuración para devolver un objeto { primero, ultimo, medio } donde medio sea un array con los elementos intermedios, 
sin modificar el array original.
*/

// 1. Copia ordenada de mayor a menor sin mutar el original
function copiaOrdenadaNumeros(arr) {
  return [...arr].sort((a, b) => b - a);
}

let nums = [3, 10, 1, 25];
console.log(copiaOrdenadaNumeros(nums)); // [25, 10, 3, 1]
console.log(nums); // [3, 10, 1, 25] (intacto)

// 2. Separar extremos sin mutar el original
function separarExtremos(arr) {
  let [primero, ...medio] = arr; // medio es un array nuevo creado por ...rest
  let ultimo = medio.pop();      // .pop() solo modifica medio, no arr
  return { primero, ultimo, medio };
}

console.log(separarExtremos([10, 20, 30, 40]));
// { primero: 10, ultimo: 40, medio: [20, 30] }
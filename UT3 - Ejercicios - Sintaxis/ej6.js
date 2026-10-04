let contador = 0;
function contarLetra(cad, letra) {
  return cad.split(letra).length - 1;
}
console.log(contarLetra("programacion", "o"));
console.log(contarLetra("hola", "z")); 
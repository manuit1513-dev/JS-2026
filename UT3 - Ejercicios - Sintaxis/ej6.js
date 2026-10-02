let contador = 0;
function contarLetra(cad, letra) {
  contador = cad.indexOf(letra);
  return contador;
}
contarLetra(" pez pez pez pez pez hola adios hola", "z");

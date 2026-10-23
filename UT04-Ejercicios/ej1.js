function contarLetra(cadena, letra) {
  let contador = 0;
  cadena = cadena.toLowerCase();
  letra = letra.toLowerCase();

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == letra) {
      contador++;
    }
  }
  return "La letra " + letra + " se repite " + contador + " veces";
}

let contarLetraExpresion = function (cadena, letra) {
  let contador = 0;
  cadena = cadena.toLowerCase();
  letra = letra.toLowerCase();
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == letra) {
      contador++;
    }
  }
  return "La letra " + letra + " se repite " + contador + " veces";
};

let contarLetraFlecha = (cadena, letra) => {
  let contador = 0;
  cadena = cadena.toLowerCase();
  letra = letra.toLowerCase();
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == letra) {
      contador++;
    }
  }
  return "La letra " + letra + " se repite " + contador + " veces";
};

console.log(contarLetra("Hola caracola", "A"));
console.log(contarLetraExpresion("Hola caracola", "A"));
console.log(contarLetraFlecha("Hola caracola", "A"));

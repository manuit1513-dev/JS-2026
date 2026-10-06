function palindromo(cadena) {
  cadena = cadena.toLowerCase().replaceAll(" ", "");
  let cadenaInvertida = cadena.split("").reverse().join("");
  if (cadena == cadenaInvertida) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromo("Ana lava lana"));

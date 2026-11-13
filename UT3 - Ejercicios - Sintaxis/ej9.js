function palindromo(cadena) {
  cadena = cadena.toLowerCase().replaceAll(" ", "");
  let cadenaInvertida = cadena.split("").reverse().join("");
  if (cadena == cadenaInvertida) {
    return true;
  } else {
    return false;
  }
}
//console.log(palindromo("Ana lava lana"));

















function palindromo2(cadena){
  cadena = cadena.trim().toLowerCase();
  palabras = cadena.split(" ");
  palabras = palabras.join("");
  let invertido = [];
  for(let i = palabras.length; i >= 0; i--){
    invertido.push(palabras[i]);
  }
  invertido = invertido.join("");
  if(palabras == invertido){
    return true;
  }else{
    return false;
  }
  
}
console.log(palindromo2('Yo hago yoga hoy'));
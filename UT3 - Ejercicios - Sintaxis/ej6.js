function contarLetra(cad, letra) {
  return cad.split(letra).length - 1;
}
//console.log(contarLetra("programacion", "o"));
//console.log(contarLetra("hola", "z"));
















function contarLetra2(cad, letra) {
  cad = cad.trim();
  let contador = 0;
  for(let i = 0; i < cad.length; i++){
    if(cad[i] === letra){
      contador++;
    }
  }
  
  return 'la letra: ' + letra + ' aparece ' + contador + ' veces';
}
console.log(contarLetra2("programacion", "o"));
console.log(contarLetra2("hola", "z"));

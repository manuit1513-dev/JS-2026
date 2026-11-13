function detectaErrorCritico(cadena) {
  const cadenaMinusculas = cadena.toLowerCase();
  return (
    cadenaMinusculas.startsWith("error") || cadenaMinusculas.endsWith("critico")
  );
}

//console.log(detectaErrorCritico("ERROR en el sistema"));
//console.log(detectaErrorCritico("en el sistema ERROR"));
//console.log(detectaErrorCritico("Fallo de tipo critico"));
//console.log(detectaErrorCritico("critico allo de tipo "));
//console.log(detectaErrorCritico("error en base de datos"));
//console.log(detectaErrorCritico("Aviso de advertencia"));
















function detectaErrorCritico2( cadena ){
  cadena = cadena.toLowerCase();
  if(cadena.startsWith("error") || cadena.endsWith("critico")){
    return true;
  }else{
    return false;
  }
}
console.log(detectaErrorCritico2("ERROR en el sistema")); //true
console.log(detectaErrorCritico2("en el sistema ERROR")); // false
console.log(detectaErrorCritico2("Fallo de tipo critico"));//true
console.log(detectaErrorCritico2("critico allo de tipo "));//false
console.log(detectaErrorCritico2("error en base de datos"));//true
console.log(detectaErrorCritico2("Aviso de advertencia"));//false

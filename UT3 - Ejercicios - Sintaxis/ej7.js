function detectaErrorCritico(cadena) {
  const cadenaMinusculas = cadena.toLowerCase();
  return (
    cadenaMinusculas.startsWith("error") || cadenaMinusculas.endsWith("critico")
  );
}

console.log(detectaErrorCritico("ERROR en el sistema"));
console.log(detectaErrorCritico("en el sistema ERROR"));
console.log(detectaErrorCritico("Fallo de tipo critico"));
console.log(detectaErrorCritico("critico allo de tipo "));
console.log(detectaErrorCritico("error en base de datos"));
console.log(detectaErrorCritico("Aviso de advertencia"));

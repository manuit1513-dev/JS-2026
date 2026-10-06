function extraerDatos(dir) {
  let subcadenas = dir.split(/[@:]/);

  return (
    "Usuario: " +
    subcadenas[0] +
    "\nDominio: " +
    subcadenas[1] +
    "\nPuerto: " +
    subcadenas[2]
  );
}
console.log(extraerDatos("admin@servidor.com:8080"));

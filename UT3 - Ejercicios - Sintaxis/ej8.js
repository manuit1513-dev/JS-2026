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
//console.log(extraerDatos("admin@servidor.com:8080"));
















function extraerDatos2(dir){
  let usuario ="";
  let poscionArroba; 
  let poscionDosPuntos;
  let dominio ="";
  let puerto ="";

  for(let i = 0; i < dir.length; i++){
    if(dir[i] === "@"){
      poscionArroba = i;
      usuario = dir.slice(0, i);
    }
    if(dir[i] === ":"){
      poscionDosPuntos = i; 
      dominio = dir.slice(poscionArroba+1, i);
    }
    puerto = dir.slice(poscionDosPuntos+1);
  }
  return 'Usuario: ' + usuario + '\nDominio: ' + dominio + "\nPuerto: " + puerto;
}
console.log(extraerDatos2('admin@servidor.com:8080'));
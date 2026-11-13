function obtenerFechaHace(fecha, dias) {
  let fechaCopia = new Date(fecha);

  fechaCopia.setDate(fechaCopia.getDate() - dias);

  return fechaCopia;
}

let fecha = new Date(2015, 0, 2);
//console.log(obtenerFechaHace(fecha, 3).toLocaleDateString());

















function obtenerFechaHace2(fecha, dias){
  fechaObj = new Date(fecha);
  fechaObj.setDate(fechaObj.getDate() - dias)
  return fechaObj.getDate();
}
let date = new Date(2015, 0, 2);
console.log( obtenerFechaHace2(date, 1) ); // 1, (1 Jan 2015)
console.log( obtenerFechaHace2(date, 2) ); // 31, (31 Dec 2014)
console.log( obtenerFechaHace2(date, 365) ); // 2, (2 Jan 2014)

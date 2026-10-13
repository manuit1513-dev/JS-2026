function obtenerFechaHace(fecha, dias) {
  let fechaCopia = new Date(fecha);

  fechaCopia.setDate(fechaCopia.getDate() - dias);

  return fechaCopia;
}

let fecha = new Date(2015, 0, 2);
console.log(obtenerFechaHace(fecha, 3).toLocaleDateString());

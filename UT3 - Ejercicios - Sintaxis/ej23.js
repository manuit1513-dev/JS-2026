function infoVentana() {
  console.log(`Contenido: ${window.innerWidth} x ${window.innerHeight}`);
  console.log(`Ventana: ${window.outerWidth} x ${window.outerHeight}`);
  console.log(`Posición: ${window.screenX}, ${window.screenY}`);
  console.log(`Scroll: ${window.scrollX}, ${window.scrollY}`);
}

console.log(infoVentana());

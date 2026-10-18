function abrirSinCaracteristicas() {
  let ventana = window.open("https://www.mozilla.org");
  console.log("Sin características:", ventana);
}

function abrirConNoopener() {
  let ventana = window.open("https://www.mozilla.org", "_blank", "noopener,noreferrer");
  console.log("Con noopener,noreferrer:", ventana);
}

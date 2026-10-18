let ventanaAbierta = null;

function abrirVentana(url, ancho, alto) {
  let left = (screen.width - ancho) / 2;
  let top = (screen.height - alto) / 2;

  let caracteristicas = `width=${ancho},height=${alto},left=${left},top=${top}`;
  let ventana = window.open(url, "emergente", caracteristicas);

  if (ventana === null) {
    console.log("El navegador ha bloqueado la ventana emergente");
    return null;
  }

  return ventana;
}

function abrir() {
  ventanaAbierta = abrirVentana("https://www.mozilla.org", 600, 400);
}

function cerrar() {
  if (ventanaAbierta && !ventanaAbierta.closed) {
    ventanaAbierta.close();
    console.log("Ventana cerrada");
  } else {
    console.log("No hay ninguna ventana abierta que cerrar");
  }
}

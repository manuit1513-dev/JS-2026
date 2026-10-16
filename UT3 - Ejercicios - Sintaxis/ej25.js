let miVentana = null;
function abrirVentana(url, ancho, alto) {
  let x = (screen.width - ancho) / 2;
  let y = (screen.height - alto) / 2;

  let win = window.open(
    url,
    "_blank",
    "width" + ancho + ",height" + alto + ",left" + x + ",top" + y
  );

  if (!win) {
    console.log("El navegador bloqueo la ventana");
    return null;
  }

  return win;
}

function probarAbrir() {
  miVentana = abrirVentana("https://www.wikipedia.org/", 800, 600);
}

function cerrarVentana() {
  if (miVentana && !miVentana.closed) {
    miVentana.close();
  } else {
    console.log("No hay ninguna ventana abierta");
  }
}

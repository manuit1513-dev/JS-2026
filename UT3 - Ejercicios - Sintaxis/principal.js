let ventanaHija = null;

function abrirHija() {
  ventanaHija = window.open("hija.html", "hija", "width=400,height=300");
}

function enviarMensaje() {
  if (!ventanaHija || ventanaHija.closed) {
    alert("Primero tienes que abrir la ventana hija");
    return;
  }

  let texto = prompt("Escribe el mensaje para la ventana hija:");

  if (texto !== null) {
    ventanaHija.mostrarMensaje(texto);
  }
}

function mostrarRespuesta(texto) {
  alert("La hija dice: " + texto);
}

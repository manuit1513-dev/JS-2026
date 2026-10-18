function mostrarMensaje(texto) {
  alert("La principal dice: " + texto);
}

function responder() {
  if (!window.opener || window.opener.closed) {
    alert("La ventana principal ya no está disponible");
    return;
  }

  let texto = prompt("Escribe la respuesta para la ventana principal:");

  if (texto !== null) {
    window.opener.mostrarRespuesta(texto);
  }
}

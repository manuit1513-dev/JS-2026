function infoNavegador() {
  console.log("Idioma: ", navigator.language);
  if (navigator.onLine == true) {
    console.log("Conexion: Conectado");
  } else {
    console.log("Conexion: Sin conexion");
  }
  console.log("Pantalla: ", screen.width, " x ", screen.height);
  console.log("Disponible: ", screen.availWidth, " x ", screen.availHeight);
}
infoNavegador();

function saludo(idioma) {
  if (idioma == "es-ES") {
    console.log("!Hola¡");
  } else if (idioma == "fr-FR") {
    console.log("Bonjour !");
  } else {
    console.log("Hello !");
  }
}
saludo("fr-FR");
saludo("de-DE");
saludo("es-ES");

function cambioPagina(url, reemplazar = false) {
  if (url == "" || url == null || url == undefined) {
  } else {
    if (reemplazar == true) {
      //location.replace("https://www.google.com/?hl=es");
      location.replace(url);
    } else {
      location.assign(url);
    }
  }
}

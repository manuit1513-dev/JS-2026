function mostrarUbicacion() {
  console.log("Href: ", location.href);
  console.log("Origen: ", location.origin);
  console.log("Protocolo: ", location.protocol);
  console.log("Host: ", location.hostname);
  console.log("Puerto: ", location.port);
  console.log("Path: ", location.pathname);
  console.log("Search: ", location.search);
  console.log("Hash: ", location.hash);
}
mostrarUbicacion();

function obtenerParametro(nombre) {
  const consulta = location.search;
  if (consulta === "" || consulta === "?") {
    return null;
  }

  const pares = consulta.substring(1).split("&");
  for (const par of pares) {
    const posIgual = par.indexOf("=");
    const clave = posIgual === -1 ? par : par.substring(0, posIgual);
    if (clave === nombre) {
      return posIgual === -1 ? "" : par.substring(posIgual + 1);
    }
  }
  return null;
}

console.log('obtenerParametro("nombre") =', obtenerParametro("nombre"));
console.log('obtenerParametro("id") =', obtenerParametro("id"));
console.log('obtenerParametro("edad") =', obtenerParametro("edad"));
document.getElementById("salida").textContent =
  "nombre=" +
  obtenerParametro("nombre") +
  " | id=" +
  obtenerParametro("id") +
  " | edad=" +
  obtenerParametro("edad");

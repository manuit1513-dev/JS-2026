// Ejercicio 1: obtenerParametro(nombre)
function obtenerParametro(nombre) {
    const consulta = location.search;           // p. ej. "?id=5&nombre=Ana"
    if (consulta === "" || consulta === "?") {
        return null;                            // la página no tiene parámetros
    }

    const pares = consulta.substring(1).split("&");   // quitamos la "?" y separamos
    for (const par of pares) {
        const posIgual = par.indexOf("=");
        const clave = posIgual === -1 ? par : par.substring(0, posIgual);
        if (clave === nombre) {
            return posIgual === -1 ? "" : par.substring(posIgual + 1);
        }
    }
    return null;                                // el parámetro no existe
}

// Pruebas: abre ej31.html?id=5&nombre=Ana
console.log('obtenerParametro("nombre") =', obtenerParametro("nombre"));
console.log('obtenerParametro("id") =', obtenerParametro("id"));
console.log('obtenerParametro("edad") =', obtenerParametro("edad"));
document.getElementById("salida").textContent =
    "nombre=" + obtenerParametro("nombre") +
    " | id=" + obtenerParametro("id") +
    " | edad=" + obtenerParametro("edad");

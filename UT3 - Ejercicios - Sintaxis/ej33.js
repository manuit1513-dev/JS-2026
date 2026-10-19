// Ejercicio 3: mismoOrigen(url1, url2)
// Reutiliza descomponerURL (se carga antes ej32.js en el HTML)
function mismoOrigen(url1, url2) {
    const a = descomponerURL(url1);
    const b = descomponerURL(url2);
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];   // el path no cuenta
}

// Pruebas
console.log(mismoOrigen("https://ejemplo.com:8080/a.html", "https://ejemplo.com:8080/b/c.html")); // true
console.log(mismoOrigen("http://ejemplo.com:8080/a.html", "https://ejemplo.com:8080/a.html"));    // false (protocolo)
console.log(mismoOrigen("https://ejemplo.com:8080/a", "https://tienda.ejemplo.com:8080/a"));      // false (dominio)
console.log(mismoOrigen("https://ejemplo.com:8080/a", "https://ejemplo.com:9090/a"));             // false (puerto)
console.log(mismoOrigen("https://ejemplo.com/a", "https://ejemplo.com:443/b"));                   // true (ampliación)

// Ejercicio 2: descomponerURL(url) -> [protocolo, dominio, puerto, path]
function descomponerURL(url) {
    const posProtocolo = url.indexOf("://");
    const protocolo = url.substring(0, posProtocolo);
    const resto = url.substring(posProtocolo + 3);      

    const posPath = resto.indexOf("/");
    const autoridad = posPath === -1 ? resto : resto.substring(0, posPath);
    const path = posPath === -1 ? "/" : resto.substring(posPath);

    let dominio;
    let puerto;
    const posPuerto = autoridad.indexOf(":");
    if (posPuerto === -1) {
        dominio = autoridad;
        puerto = protocolo === "https" ? "443" : "80";
    } else {
        dominio = autoridad.substring(0, posPuerto);
        puerto = autoridad.substring(posPuerto + 1);
    }

    return [protocolo, dominio, puerto, path];
}

console.log(descomponerURL("https://ejemplo.com:8080/curso/tema.html"));
console.log(descomponerURL("https://ejemplo.com/index.html"));
console.log(descomponerURL("http://ejemplo.com/index.html"));

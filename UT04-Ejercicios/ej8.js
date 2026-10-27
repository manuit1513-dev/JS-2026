let array = ["hola", 67, 99, "nike", 13, "manuel", "hola"];

function convertirMayusculas() {
  let repetida = array.indexOf("hola");
  if (repetida == null) {
    return "Esa palabra no esta disponible";
  } else {
    // hacer algo cmo pa eliminar esa palabra o replace en esa posicion y y añadir en la misma posicion esa palabra en mayuscula
    let mayuscula = repetida.toUpperCase();

    return;
  }
}

console.log(convertirMayusculas(array));

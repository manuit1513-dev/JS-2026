let array = ["hola", 67, 99, "nike", 13, "manuel", "hola"];

function convertirMayusculas() {
  let repetida = array.indexOf("hola");
  if (repetida == null) {
    return "Esa palabra no esta disponible";
  } else {
    // hacer algo cmo pa eliminar esa palabra o replace en esa posicion y y añadir en la misma posicion esa palabra en mayuscula
    let mayuscula = array[repetida].toUpperCase();

    array[repetida] = mayuscula;

    return array;
  }
}

/*console.log(convertirMayusculas(array));

*/

















let cadena= [1,'a',5,6,7,'e','a'];
let posicion = cadena.indexOf('a');
cadena.splice(posicion, 1, cadena[posicion].toUpperCase());
console.log(cadena);


let cadena2= [1,'a',5,6,7,'e','a'];
let posicion2 = cadena2.indexOf('a', cadena2.length-1);
cadena2.splice(posicion2, 1, cadena2[posicion2].toUpperCase());
console.log(cadena2);


let cadena3= [1,'a',5,6,7,'e','a'];
 let posicion3 = cadena3.indexOf('a');

while(posicion3 != -1){
  cadena3.splice(posicion3, 1, cadena3[posicion3].toUpperCase());
  posicion3 = cadena3.indexOf('a');
}
  
  

console.log(cadena3);
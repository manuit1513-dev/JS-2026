let carrito = {
  Ratón: 25,
  Monitor: 180,
  Alfombrilla: 12,
  Auriculares: 60
};

/*
Crea una función filtrarCaros(obj, minimo) que recorra Object.entries(obj) 
con for (let [producto, precio] of ...) y devuelva un array con los nombres de los productos cuyo precio >= minimo.
Crea otra función productoMasCaro(obj) que devuelva un array [nombre, precio] 
con el producto más caro, y al llamarla recoge el resultado con asignación múltiple: let [nombreMax, precioMax] = productoMasCaro(carrito);.
*/
function filtrarCaros(obj, minimo) {
  let resultado = [];
  for (let [producto, precio] of Object.entries(obj)) {
    if (precio >= minimo) {
      resultado.push(producto);
    }
  }
  return resultado;
}

function productoMasCaro(obj) {
  let nombreMax = null;
  let precioMax = -Infinity;

  for (let [producto, precio] of Object.entries(obj)) {
    if (precio > precioMax) {
      precioMax = precio;
      nombreMax = producto;
    }
  }
  return [nombreMax, precioMax];
}

console.log(filtrarCaros(carrito, 50)); // ["Monitor", "Auriculares"]

let [nombreMax, precioMax] = productoMasCaro(carrito);
console.log(nombreMax, precioMax); // "Monitor" 180
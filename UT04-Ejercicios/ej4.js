let frutas = ["Manzana", "Pera", "Naranja"];
let frutas2 = ["Manzana", "Pera", "Naranja"];
console.log(frutas == frutas2); // Saldra false porque no apuntan a lo misma direccion de memoria
let compra = frutas;
compra.push("Plátano");
console.log(frutas == compra); // sale true porque apuntan a la misma direccion de memoria
console.log(frutas.length); // 4 porque la modificar compra tb se modifico frutas

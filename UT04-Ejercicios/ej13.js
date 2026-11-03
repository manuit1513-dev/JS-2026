function ordenarPorEdad(users) {
  users.sort((a, b) => {
    a.edad - b.edad;
  });
}

let juan = { nombre: "Juan", edad: 25 };
let pedro = { nombre: "Pedro", edad: 30 };
let marta = { nombre: "Marta", edad: 28 };

let arr = [juan, pedro, marta];
//ordenarPorEdad(arr);

//console.log(arr[0].nombre);
//console.log(arr[1].nombre);
//console.log(arr[2].nombre);

function encontrarPedro(users) {
  let pedro = users.find((item) => item.nombre == "Pedro");
  return pedro;
}
console.log(encontrarPedro(arr));

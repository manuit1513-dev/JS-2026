let john = {nombre: "John", apellido: "Smith", id: 1};
let pete = {nombre: "Pete", apellido: "Hunt", id: 2};
let mary = {nombre: "Mary", apellido: "Key", id: 3};

let usuarios = [john, pete, mary];

let usuariosMapeados = usuarios.map(usuario => {
    return {
        nombreCompleto: usuario.nombre + ' ' + usuario.apellido,
        id: usuario.id
    };
});

  /*
usuariosMapeados= [
  {nombreCompleto: "John Smith", id: 1 },
  {nombreCompleto: "Pete Hunt", id: 2 },
  {nombreCompleto: "Mary Key", id: 3 }
]
*/

console.log(usuariosMapeados[0].id); // 1
console.log(usuariosMapeados[0].nombreCompleto); // John Smith

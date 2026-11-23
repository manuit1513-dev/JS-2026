/*
Escribe una función mostrarFicha({ nombre, apellido, rol = "Invitado" }) que reciba un objeto usuario,
 lo desestructure directamente en los parámetros (con "Invitado" por defecto si no tiene rol) y devuelva la cadena:
"Ana Pérez (Editor)" o "Luis Gómez (Invitado)".
Usando .map() y desestructuración en la función flecha, 
genera un nuevo array tarjetas donde cada elemento sea un objeto con 
{ id, nombreCompleto } (ej. { id: 1, nombreCompleto: "Ana Pérez" }).
*/
let usuarios = [
  { id: 1, nombre: "Ana", apellido: "Pérez", rol: "Editor" },
  { id: 2, nombre: "Luis", apellido: "Gómez" },
  { id: 3, nombre: "Marta", apellido: "Ruiz", rol: "Admin" }
];

function mostrarFicha({nombre, apellido, rol = "invitado"}){
    return `${nombre} ${apellido} (${rol})`;
}

console.log(mostrarFicha(usuarios[0])); // "Ana Pérez (Editor)"
console.log(mostrarFicha(usuarios[1])); // "Luis Gómez (Invitado)"
// 2. .map() desestructurando en la flecha
// ¡TRUCO! Al devolver un objeto literal en una flecha sin llaves de bloque,
// hay que envolverlo entre paréntesis: => ({ ... })
let tarjetas = usuarios.map(({ id, nombre, apellido }) => ({
  id,
  nombreCompleto: `${nombre} ${apellido}`
}));
console.log(tarjetas);
// [{ id: 1, nombreCompleto: "Ana Pérez" }, ...]
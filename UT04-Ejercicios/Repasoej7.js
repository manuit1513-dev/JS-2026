let alumno = {
  nombre: "Carlos",
  edad: 21,
  modulos: ["DWEC", "DWES"]
};

/*
scribe una función actualizarAlumno(original, cambios) que devuelva un nuevo objeto combinando original y cambios con 
...spread (los campos de cambios sobrescriben a los de original).
Prueba a llamarla con { edad: 22 } y comprueba que alumno.edad sigue siendo 21.
Haz una copia de alumno con { ...alumno } y haz copia.modulos.push("DIW"). 
¿Qué le ocurre a alumno.modulos? ¿Cómo harías la copia usando solo ...spread para que el array modulos tampoco se comparta?
*/

// 1 y 2. Combinar objetos
function actualizarAlumno(original, cambios) {
  return { ...original, ...cambios };
}

let actualizado = actualizarAlumno(alumno, { edad: 22 });
console.log(actualizado.edad); // 22
console.log(alumno.edad);      // 21 (intacto)

// 3. Problema de la copia superficial:
let copiaMala = { ...alumno };
copiaMala.modulos.push("DIW");
console.log(alumno.modulos); // ["DWEC", "DWES", "DIW"] -> ¡Se modifica también en alumno!

// Solución copiando también el array interno con spread:
let copiaBien = { ...alumno, modulos: [...alumno.modulos] };
copiaBien.modulos.push("EIE");
console.log(alumno.modulos);    // no tiene "EIE"
console.log(copiaBien.modulos); // sí tiene "EIE"
let edad;
function edad2(edad) {
  if (isNaN(edad)) {
    return "Solo puede introducir numeros";
  }

  if (edad >= 0 && edad <= 12) {
    return "Niño";
  } else if (edad > 12 && edad <= 25) {
    return "Joven";
  } else if (edad > 25 && edad <= 60) {
    return "Adulto";
  } else if (edad < 0) {
    return "No se pueden instroducir valores negativos";
  } else {
    return "Jubilado";
  }
}

console.log(edad2(-1));
console.log(edad2(0));
console.log(edad2(1));
console.log(edad2(23));
console.log(edad2(48));
console.log(edad2(99));
console.log(edad2(0));
console.log(edad2("yyyyyy"));

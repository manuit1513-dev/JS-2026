let edad = prompt("Introduzca su edad:", "");
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

edad2(edad);

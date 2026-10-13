function diaSemana(fecha) {
  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  const fechaObj = new Date(fecha);

  return dias[fechaObj.getDay()];
}

console.log(diaSemana(new Date()));
console.log(diaSemana("2026-10-15"));

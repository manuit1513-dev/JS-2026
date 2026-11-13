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

//console.log(diaSemana(new Date()));
//console.log(diaSemana("2026-10-15"));

















function diaSemana(fecha){
  let fechaObj = new Date(fecha);
  let diaSemana =["domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",];
  dia = fechaObj.getDay();
  return ("el dia de lasemana es: " + diaSemana[dia]);

}
console.log(diaSemana("2026-02-08"));
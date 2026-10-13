function diaSemanaLocal(fecha) {
  return fecha.getDay() === 0 ? 7 : fecha.getDay();
}

console.log(diaSemanaLocal(new Date("2026-10-12")));
console.log(diaSemanaLocal(new Date("2026-10-18")));

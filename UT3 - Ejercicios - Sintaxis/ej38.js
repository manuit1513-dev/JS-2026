function almacenarFecha(fecha) {
  localStorage.setItem("dia", fecha.getDate());
  localStorage.setItem("mes", fecha.getMonth() + 1);
  localStorage.setItem("anno", fecha.getFullYear());
}

almacenarFecha(new Date(2026, 11, 25));

function contarVisitas() {
  let visitas = parseInt(localStorage.getItem("visitas"), 10) || 0;
  visitas++;
  localStorage.setItem("visitas", visitas);
  return visitas;
}

function contarVisitasSesion() {
  let visitas = parseInt(sessionStorage.getItem("visitasSesion"), 10) || 0;
  visitas++;
  sessionStorage.setItem("visitasSesion", visitas);
  return visitas;
}

console.log("Esta es tu visita número " + contarVisitas());
console.log("Esta es tu visita número " + contarVisitasSesion() + " de esta sesión");
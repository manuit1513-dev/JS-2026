function calcularHora() {
  let ahora = new Date();
  let h = ahora.getHours();
  let m = ahora.getMinutes();
  let s = ahora.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  return h + ":" + m + ":" + s;
}

let campo = document.getElementById("hora");

let devolverHora = setInterval(() => {
  campo.value = calcularHora();
}, 1000);

function ultimoDiaMes(anno, mes) {
  let fecha = new Date(anno, mes + 1, 0);

  return fecha.getDate();
}

console.log(ultimoDiaMes(2012, 1));

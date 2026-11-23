function resultado(...valores) {
  let MaxyMin = {};

  let maximo = Math.max(...valores);
  MaxyMin.maximo = maximo;

  let minimo = Math.min(...valores);
  MaxyMin.minimo = minimo;

  return MaxyMin;
}

let valores = [7, 8, 9, 1, 6, 5, 4];
console.log(resultado(...valores));

let n;
let resultado;
function tablaMultipliicar(n) {
  if (n != Number) {
    console.log("ERROR");
  } else {
    console.log("la tabla de multiplicar del: ", n);
    for (i = 1; i <= 10; i++) {
      resultado = n * i;
      console.log(n, " x ", i, " = ", resultado);
    }
  }
}
tablaMultipliicar("hy");

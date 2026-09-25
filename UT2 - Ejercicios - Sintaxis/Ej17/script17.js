function pedirNumeroMayor100() {
  let mensaje = prompt("Dime un numero mayor que 100:");
  for (; mensaje < 100; mensaje = prompt("Dime un numero mayor que 100:")) {
    if (mensaje >= 100) {
      return mensaje;
    }
  }
}
let r = pedirNumeroMayor100();
console.log(mensaje);

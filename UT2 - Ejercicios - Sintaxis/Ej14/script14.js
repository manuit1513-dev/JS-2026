"use strict";
function multiplos() {
  console.log("LISTADO DE NUMEROS DEL 1 AL 100");
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log(i, "es multiplo de 2 y es multiplo de 3\n");
    } else if (i % 3 === 0) {
      console.log(i, "es multiplo de 3\n");
    } else if (i % 2 === 0) {
      console.log(i, "es multiplo de 2\n");
    } else {
      console.log(i, "\n");
    }
  }
}
multiplos();

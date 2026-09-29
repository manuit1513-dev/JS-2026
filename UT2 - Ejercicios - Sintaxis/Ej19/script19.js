"use strict";
function tablero(numColumnas, numFilas) {
  if (numFilas == 0 || numColumnas == 0) {
    return;
  }
  let lineaPar = "";
  let lineaImpar = "";
  for (let i = 1; i <= numColumnas; i++) {
    if (i % 2 == 0) {
      lineaPar += " ";
      lineaImpar += "#";
    } else {
      lineaImpar += " ";
      lineaPar += "#";
    }
  }
  for (let j = 1; j <= numFilas; j++) {
    if (j % 2 == 0) {
      console.log(lineaImpar);
    } else {
      console.log(lineaPar);
    }
  }
}
tablero(7, 4);

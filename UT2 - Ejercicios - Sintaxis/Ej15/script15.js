"use strict";
let hora;
function horas30minutos() {
  for (let i = 9; i <= 21; i++) {
    for (let j = 0; j < 60; j += 30) {
      console.log(i, ":", j);
    }
  }
}
horas30minutos();

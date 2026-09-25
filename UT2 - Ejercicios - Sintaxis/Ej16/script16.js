function horas5minutos() {
  for (let i = 9; i <= 21; i++) {
    for (let j = 0; j < 60; j += 5) {
      console.log(i, ":", j);
    }
  }
}
horas5minutos();

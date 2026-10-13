function getSecondsToday() {
  let hoy = new Date();
  hoy.setHours(10, 0, 0, 0);
  let hoyAlas00 = new Date();
  hoyAlas00.setHours(0, 0, 0, 0);

  let diferencia = hoy - hoyAlas00;

  return diferencia / 1000;
}

console.log(getSecondsToday());

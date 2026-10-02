let srt = "universal";
let srt2 = "Lo que me gustaría contar sobre este tema es:";
let maxLong = 20;
function truncar(srt, maxLong) {
  if (srt2.length > maxLong) {
    srt2 = srt2.slice(0, maxLong) + "…";
    console.log(srt2);
  }
}
truncar(srt2, maxLong);

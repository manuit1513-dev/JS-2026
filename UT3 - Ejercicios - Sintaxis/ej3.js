function truncar(srt = "", maxLong) {
  if (srt.length > maxLong) {
    srt = srt.slice(0, maxLong) + "…";
    return srt;
  } else {
    return srt;
  }
}
console.log(truncar("universal", 10));
console.log(truncar("Lo que me gustaría contar sobre este tema es:", 20));

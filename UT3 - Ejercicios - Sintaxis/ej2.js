function comprobarSpam(srt = "") {
  srt = srt.toLowerCase();
  if (srt.includes("gratis") || srt.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}
console.log(comprobarSpam("XXX"));
console.log(comprobarSpam("GRATIS"));
console.log(comprobarSpam("abduscan"));

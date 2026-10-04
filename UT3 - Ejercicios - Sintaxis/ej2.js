let srt = "XXX";
function comprobarSpam(srt = "") {
  if (srt.includes("gratis") || srt.includes("XXX")) {
    console.log("true");
  } else {
    console.log("false");
  }
}
comprobarSpam(srt);

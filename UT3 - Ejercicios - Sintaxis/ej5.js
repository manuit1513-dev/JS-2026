let srt = "120€";
function extraerValorEuros(srt) {
  return srt.slice(0, -1);
}
srt = extraerValorEuros(srt);
console.log(srt);

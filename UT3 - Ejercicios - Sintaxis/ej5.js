let srt = "120€";
function extraerValorEuros(srt) {
  return srt.slice(0, -1);
}
srt = extraerValorEuros(srt);
//console.log(srt);


















function extraerValorEuros2(str) {
  return str.slice(0,-1);
}
console.log(extraerValorEuros2('123345€'));
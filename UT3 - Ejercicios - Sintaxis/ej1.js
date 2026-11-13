let frase = "hola yo soy manuel";
function inicialMay(srt) {
  return srt.at(0).toUpperCase() + srt.slice(1);
}
inicialMay(frase);
//console.log(inicialMay(frase));




















function inicialMay2(str){
  let mayuscula = str[0].toUpperCase();
  return mayuscula + str.slice(1);
}
console.log(inicialMay2('manuel'));
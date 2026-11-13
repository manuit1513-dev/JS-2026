srt = "$120";
function extraerValorDolares(str) {
  srt = srt.slice(1);
  return srt;
}
//console.log(extraerValorDolares(srt));

















function extraerValorDolares2(str){
  if(str.includes('$')){
    let numero = str.slice(1);
    return numero; 
  }
}
console.log(extraerValorDolares2('$120'));
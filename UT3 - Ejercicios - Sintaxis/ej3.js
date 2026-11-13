function truncar(srt = "", maxLong) {
  if (srt.length > maxLong) {
    srt = srt.slice(0, maxLong) + "…";
    return srt;
  } else {
    return srt;
  }
}
//console.log(truncar("universal", 10));
//console.log(truncar("Lo que me gustaría contar sobre este tema es:", 20));

















function truncar2(str, maxLong) {
  if(str.length > maxLong){
    str = str.slice(0, maxLong);
    str = str + "…";
    return str; 
  }else{
    return str;
  }
}
console.log(truncar2("Lo que me gustaría contar sobre este tema es:", 20));

console.log(truncar2("Hola a todos", 20));

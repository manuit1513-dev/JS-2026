function comprobarSpam(srt = "") {
  srt = srt.toLowerCase();
  if (srt.includes("gratis") || srt.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}
//console.log(comprobarSpam("XXX"));
//console.log(comprobarSpam("GRATIS"));
//console.log(comprobarSpam("abduscan"));



















function comprobarSpam2(str){
  str = str.toLowerCase();
  if(str.includes('gratis') || str.includes('xxx')){
    return true;
  }else{
    return false;
  }
}
console.log(comprobarSpam2('este texto incluye gratis'));
console.log(comprobarSpam2('este texto incluye XXX'));
console.log(comprobarSpam2('este texto incluye GRATIS'));
console.log(comprobarSpam2('este texto no incluye'));
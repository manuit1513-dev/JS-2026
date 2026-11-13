function numeros(n) {
  console.log(n.toFixed(4));
  console.log(n.toString(2));
  console.log(n.toString(8));
  console.log(n.toString(16));
}
//numeros(20);

















function  numeros2(n) {
 let decimal = n.toFixed(4);
  let binario = n.toString(2);
  let octal = n.toString(8);
  let hexadecimal = n.toString(16);
  return decimal + "/" + binario + "/" +octal + "/" +hexadecimal;
}
console.log(numeros2(50));
//50.0000 / 00110010 / 62 / 32
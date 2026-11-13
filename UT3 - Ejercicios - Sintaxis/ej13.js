function bonoloto() {
  let array = [];
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  function randomInteger2(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  for (let i = 1; i < 7; i++) {
    array = array + " " + randomInteger(1, 49);
  }
  array = array + " " + randomInteger2(0, 9);
  console.log(array);
}
//bonoloto();
















function bonoloto2(){
  let aleatorio = function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let combinacionGanadora = [];
  while(combinacionGanadora.length < 7){
    let numeroAleatorio = aleatorio(1, 49);
    let estaEnElArray =  false;
    for(let i = 0; i < combinacionGanadora.length; i++){
      if(numeroAleatorio == combinacionGanadora[i]){
        estaEnElArray =  true;
      }
    }
    if(!estaEnElArray){
      combinacionGanadora.push(numeroAleatorio);
    }
  
  }

  let reintegro = aleatorio(1,9);
  return "combinacion ganadora: " + combinacionGanadora.slice(0,combinacionGanadora.length-1).join(", ") + "\ncomplementario: " + combinacionGanadora[combinacionGanadora.length-1] + "\nreintegro: " + reintegro;
}
console.log(bonoloto2());
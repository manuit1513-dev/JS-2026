function pedirNumeroMayor100(){
  let entrada = prompt("introdizca un numero mayor de 100;");
  while(Number(entrada) <= 100){
    
    if(entrada == null || entrada == ""){
      return null;
    }
    entrada = prompt("introdizca un numero mayor de 100;");
    

  }return entrada;
} 
console.log(pedirNumeroMayor100());
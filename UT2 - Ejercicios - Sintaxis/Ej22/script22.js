function Fibonacci(n){
    if (n < 0){
        console.log("");
    }
    let resultado =0;
    let operacion ="";
    for(let i = 0; i < n; i++){
        resultado += i;
        operacion = i + " + " + (i+1);
        console.log(operacion + " = " + resultado);
    }
    
}
Fibonacci(900);
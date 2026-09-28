function factorial(n){
    let resultado = 1;
    let operacion ="";
    if (n == 0){
        process.stdout.write("!0");
    }
    for(let i= n; i >= 1; i--){
        resultado *= i;
        if (i === 1){
            operacion = operacion + i;
        }else{
            operacion = operacion + i + " x ";
        }
    }
    console.log(operacion + " = " + resultado);
}
factorial(5);
factorial(0);
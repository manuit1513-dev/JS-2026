function primos(n){
    for(let i = 2; i <= n ; i++){
        let esPrimo = true;
        for(let j = 2; j < i; j++){
            if(i%j === 0){
                esPrimo = false;
            }
        }
        if(esPrimo){
            console.log(i);
        }
    }
}
primos(100);
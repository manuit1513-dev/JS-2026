function fibonacci(n){
    let array =[];
     let a = 0;
     let b = 1;
     for(let i = 0; i < n; i++){
        array.push(a);
        let siguiente = a +b;
        a=b
        b=siguiente;
     }
     console.log(array.join(", "));
}
fibonacci(5);
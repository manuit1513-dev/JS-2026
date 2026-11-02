function filterRange(arr, a, b){
    let filtrado = [];
    for(const numero of arr){
        if(numero >= a && numero <= b){
         filtrado.push(numero);
        }
    }
    return filtrado;
}
let arr = [5, 3, 8, 1];
let filtrado = filterRange(arr, 1, 4);
console.log(filtrado); // 3,1 (valores dentro del rango)
console.log(arr); // 5,3,8,1 (array original no modificado)

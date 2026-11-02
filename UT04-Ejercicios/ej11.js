function ordenaDecreciente(arr) {
    arr.sort((a, b) => b - a);
}

let arr = [5, 2, 1, -10, 8];
ordenaDecreciente(arr);
console.log(arr); // [8, 5, 2, 1, -10]

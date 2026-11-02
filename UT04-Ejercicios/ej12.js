function copiaOrdenada(arr) {
    return arr.slice().sort((a, b) => {
        if (a < b) return -1; 
        if (a > b) return 1;  
        return 0;            
    });
}
let arr = ["HTML", "CSS", "JavaScript"];
let arrOrdenado = copiaOrdenada(arr);
console.log(arr);        
console.log(arrOrdenado); 
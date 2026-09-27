//usar repeat()
function triangulo(lineas){
    for(let i = 1; i <= lineas; i++){
        let fila = "";
        for (let j = 1; j <= i; j++){
            fila += "#";
            
        }
        console.log(fila);
    }

}
triangulo(7);
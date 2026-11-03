function iterable(str){
    let separado = Array.from(str);

    separado.sort((palabra1, palabra2) => {
        if(palabra1 < palabra2){
            return -1;
        }else if(palabra1 > palabra2){
            return 1;
        }else{
            return 0
        }
    });

    let nuevaCadena = separado.join('');
    return nuevaCadena;
}

console.log(iterable('ZYXWVUTSRQPONMLKJIHGFEDCBA'));
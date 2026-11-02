function camelize(str){
    let sinEspacios = str.trim();
    let sinGion = sinEspacios.split('-');

    let arrayModificado = sinGion.map((palabra, indice) => {

        if(indice == 0){
            return palabra;
        }
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    })

    return arrayModificado.join('');
    
    
}
console.log(camelize("background-color"));
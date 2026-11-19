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
//console.log(camelize("background-color"));

















function camelizar2(str){
    let separado = str.split("");
    let posicion = separado.indexOf("-");
    while(posicion != -1){
        separado.splice(posicion, 2, separado[posicion+1].toUpperCase());
        
        posicion = separado.indexOf("-");
    }
    return separado.join("");
}
console.log(camelizar2("background-color") );
console.log(camelizar2("list-style-image") );
console.log(camelizar2("-webkit-transition") );

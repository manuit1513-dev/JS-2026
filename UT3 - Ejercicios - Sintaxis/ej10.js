function validarNIF_NIE(nif_nie){
    let documento = nif_nie.toUpperCase().trim();

    if (documento.length !== 9) {
        return false;
    }

    let letraProporcionada = documento.charAt(8);
    let bloqueInicial = documento.substring(0, 8); 

    let primeraLetra = bloqueInicial.charAt(0);
    
    if (primeraLetra === "X") {
        bloqueInicial = "0" + bloqueInicial.substring(1);
    } else if (primeraLetra === "Y") {
        bloqueInicial = "1" + bloqueInicial.substring(1);
    } else if (primeraLetra === "Z") {
        bloqueInicial = "2" + bloqueInicial.substring(1);
    }

    let numero = parseInt(bloqueInicial, 10);

    if (isNaN(numero)) {
        return false;
    }

    let resto = numero % 23;

    const TABLA_LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";

    let letraCorrecta = TABLA_LETRAS.charAt(resto);

    return letraProporcionada === letraCorrecta;
}


console.log(validarNIF_NIE("12345678Z"));
console.log(validarNIF_NIE("X1234567L"));


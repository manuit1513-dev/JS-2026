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


//console.log(validarNIF_NIE("12345678Z"));
//console.log(validarNIF_NIE("X1234567L"));

















function validarNIF_NIE2( nif_nie){
    letras='TRWAGMYFPDXBNJZSQVHLCKE';
    nif_nie = nif_nie.toLowerCase();
    if(nif_nie.length != 9 || typeof nif_nie[nif_nie.length-1] != "string"){
        return "el DNI/NIE no es correcto";
    }else{
        letraNIE = nif_nie[0];
        if(letraNIE == "x"){
            letraNIE = 0;
        }
        if(letraNIE == "y"){
            letraNIE = 1;
        }if(letraNIE == "z"){
            letraNIE = 2;
        }
        nif_nie = letraNIE + nif_nie.slice(1);
        numeroDNI = nif_nie.slice(0,-1);
        resto = numeroDNI%23;
        let letraComprobar = letras[resto];
        if(letraComprobar == nif_nie[nif_nie.length-1].toUpperCase()){
            return " su DNI/NIE es correcto";
        }else{
            return " su DNI/NIE NO es correcto";
        }
    }
} 

console.log(validarNIF_NIE2('Z1234567G'));
console.log(validarNIF_NIE2('13109962P'));
// DNI
console.log(validarNIF_NIE2('56221526G'));
console.log(validarNIF_NIE2('50127621H'));
console.log(validarNIF_NIE2('76069822J'));
console.log(validarNIF_NIE2('73126034H'));

// NIF
console.log(validarNIF_NIE2('12313207L'));
console.log(validarNIF_NIE2('74997547K'));
console.log(validarNIF_NIE2('98319066T'));
console.log(validarNIF_NIE2('70454006S'));

// NIE
console.log(validarNIF_NIE2('Y6478436V'));
console.log(validarNIF_NIE2('X5997109C'));
console.log(validarNIF_NIE2('Y7492239A'));
console.log(validarNIF_NIE2('X3412471F'));
// DNI (letra incorrecta o longitud errónea)
console.log(validarNIF_NIE2('56221526A'));
console.log(validarNIF_NIE2('50127621Z'));
console.log(validarNIF_NIE2('7606982J'));
console.log(validarNIF_NIE2('731260345H'));

// NIF (letra incorrecta, letras prohibidas I/Ñ o caracteres no numéricos)
console.log(validarNIF_NIE2('12313207P'));
console.log(validarNIF_NIE2('74997547I'));
console.log(validarNIF_NIE2('98319066Ñ'));
console.log(validarNIF_NIE2('7045A006S'));

// NIE (letra final incorrecta, letra inicial no válida o longitud errónea)
console.log(validarNIF_NIE2('Y6478436X'));
console.log(validarNIF_NIE2('A5997109C'));
console.log(validarNIF_NIE2('Y749223A'));
console.log(validarNIF_NIE2('Z1234567G'));

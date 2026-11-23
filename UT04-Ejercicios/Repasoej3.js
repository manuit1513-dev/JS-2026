function resumenNotas(modulo, ...notas){
    //cuando una funcion recide ...notas, notas ya es un array y se puede usar como tal
    if(notas.length == 0){
        return null;
    }else{
        let totalNotas = 0;
        let notaMax = 0;
        let notaMin = 10;
        let suma = 0;
        let media;

        
        notaMax = Math.max(...notas);
        notaMin = Math.min(...notas);
        totalNotas = notas.length;

        for(let i  = 0; i < notas.length; i++){
            suma += notas[i];
        }
        media = suma/totalNotas;
        console.log(notas);

        return {modulo, totalNotas, notaMax, notaMin, media}
    }
}

console.log(resumenNotas("DWEC", 6, 8, 5, 9));
// { modulo: "DWEC", totalNotas: 4, notaMax: 9, notaMin: 5, media: 7 }
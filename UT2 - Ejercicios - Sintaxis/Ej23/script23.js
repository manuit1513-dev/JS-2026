function binario(n) {
    if (!Number.isInteger(n) || n < 0) return "";
    if (n === 0) return "0";

    let resultado = "";
    let cociente = n;

    while (cociente > 0) {
        let resto = cociente % 2;
        resultado = resto + resultado;
        cociente = (cociente - resto) / 2; 
    }

    console.log(resultado);
}
binario(0);   
binario(1);   
binario(4);   
binario(13);  
binario(45); 
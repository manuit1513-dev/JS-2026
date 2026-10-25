function mostrarAlert(){
    alert ("Este mensaje se mostro pasados 10 segundos");
}

let alerta = setTimeout(() => {mostrarAlert()}, 10000); 
// al pasarla sin parentesisi espera a q pasen los 10 seg ejecutarse el codigo
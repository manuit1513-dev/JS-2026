function cuantoFalta(fecha){
    let fechaCopia = new Date(fecha);
    let hoy = new Date();

    let diasRestantes  = (fechaCopia - hoy)/1000/60/60/24;

    return Math.round(diasRestantes);
}

console.log(cuantoFalta("2026-11-21"));

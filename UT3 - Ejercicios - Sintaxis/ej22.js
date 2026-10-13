function faltaCumple(dia, mes){

    let hoy = new Date();
    let fechaCumple = new Date();
    fechaCumple.setDate(dia);
    fechaCumple.setMonth(mes);
    fechaCumple.setHours(0,0,0,0);

    if (fechaCumple < hoy){
        fechaCumple.setFullYear(hoy.getFullYear() + 1);
    }

    let diasRestCump = (fechaCumple - hoy)/1000/60/60/24;
    let horasRestCump = (fechaCumple - hoy)%(1000*60*60*24) / (1000*60*60);

    let mensaje1 = "Para tu compleños faltan: " + Math.round(diasRestCump) + " dias y " + Math.round(horasRestCump) + " horas\n";

    let añosCumpDomingo = [];
    for(let i = fechaCumple.getFullYear(); i <= 2100; i++){
        fechaCumple.setFullYear(i);
        if(fechaCumple.getDay() === 0){
            añosCumpDomingo.push(i);
        }
    }

    let mensaje2= "Los años en los que tu cumpleaños cae domingo hasta 2100 son: " + añosCumpDomingo;
    return mensaje1 + mensaje2;
}
console.log(faltaCumple(7, 1));
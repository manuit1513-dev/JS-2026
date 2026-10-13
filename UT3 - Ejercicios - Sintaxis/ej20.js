function getSecondsToTomorrow(){
    let mañana = new Date();
    let hoy = new Date();

    mañana.setDate(mañana.getDate() + 1);
    mañana.setHours(0,0,0,0);
    hoy.setHours(23,0,0,0);

    let segRestantes  = (mañana - hoy)/1000;
    return Math.round(segRestantes);

}
console.log(getSecondsToTomorrow());
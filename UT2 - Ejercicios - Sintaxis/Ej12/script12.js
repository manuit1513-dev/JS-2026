

let edad = prompt("Introduzca su edad:", "")
function edad2(edad){

    if(isNaN(edad)){
        alert("Solo puede introducir numeros");
        return;
    }

    if(edad >= 0 && edad <= 12){
        alert("Niño");
    }else if(edad > 12 && edad <= 25){
        alert("Joven");
    }else if(edad > 25 && edad <= 60){
        alert("Adulto");
    }else if(edad < 0){
        alert("No se pueden instroducir valores negativos");
        return;
    }
    else{
        alert("Jubilado");
    }

    
}

edad2(edad);
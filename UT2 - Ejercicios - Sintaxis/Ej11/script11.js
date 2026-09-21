let inicioSesion = prompt("Ingerese su usuario", "");
const palabraClave = "Admin";

if (inicioSesion == palabraClave){
    let contraseña = prompt("Ingrese su contraseña:");
    if (contraseña == "TheMaster"){
        alert("Bienvenido!");
    }else if(contraseña == null || contraseña == ""){
        alert("Cancelado");
    }else{
        alert("Contraseña incorrecta");
    }
}else if(inicioSesion == null || inicioSesion == ""){
    alert("Cancelado");
}else{
    alert("No te conozco");
}
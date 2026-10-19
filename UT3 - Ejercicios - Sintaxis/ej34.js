// Ejercicio 4: botones de historial (compartido por pag1, pag2 y pag3)
console.log("history.length =", history.length);

document.getElementById("atras").addEventListener("click", function () {
    history.back();
});
document.getElementById("adelante").addEventListener("click", function () {
    history.forward();
});
document.getElementById("atras2").addEventListener("click", function () {
    history.go(-2);
});

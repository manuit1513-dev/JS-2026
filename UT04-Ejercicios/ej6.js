function almacenarEntrada() {
    let array = [];
    let pregunta = prompt("Introduzca un número: ");

    while (pregunta !== null && pregunta.trim() !== "" && !isNaN(Number(pregunta))) {
        array.push(Number(pregunta));
        pregunta = prompt("Introduzca un número: ");
    }

    return array;
}

console.log(almacenarEntrada());
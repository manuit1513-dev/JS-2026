let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

styles[Math.floor(styles.length / 2)] = "Classics";
console.log(styles);

let primerElemento = styles.shift();
console.log("este es el primer elemeto: " + primerElemento);
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);














console.log('NUEVOOOOOOOOOOOO');




let styles2 =["Jazz", "Blues"];
styles2.push('Rock-n-roll');
console.log(styles2);
styles2[Math.floor(styles2.length/2)] = "Classic"; // metodo pa añadir elemento el medio de cualquier array
console.log(styles2);
styles2.shift();
console.log(styles2);
styles2.unshift('Rap', "Reggae");
console.log(styles2);
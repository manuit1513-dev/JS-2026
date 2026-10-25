let array1 = [1, "dos", "tres", 4, 5, "seis", "siete"];

for (let i = array1.length - 1; i >= 0; i--) {
    if (typeof array1[i] === "string") {
        array1.splice(i, 1);
    }
}

console.log(array1);

let array2 = [1, "dos", "tres", 4, 5, "seis", "siete"];

for (let i = 0; i < array2.length; i++) {
    if (typeof array2[i] === "string") {
         array2.splice(i + 1, 0, array2[i].toUpperCase());
        i++; 
    }
}

console.log(array2); 

let array3 = [1, "dos", "tres", 4, 5, "seis", "siete"];
for(let i = 0; i < array3.length; i++){
    if(typeof array3[i] === "string"){
        array3.slice(i, 1, "ELIMINADO", "INSERTADO");
        i++;
    }
}

console.log(array3);
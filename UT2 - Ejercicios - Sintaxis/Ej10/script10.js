let edad = 77;
function edad1(edad) {
  if (edad >= 14 && edad <= 90) {
    return true;
  } else {
    return false;
  }
}

/*otra opcion seria

    function edad1(edad) {
        return edad >= 14 && edad <= 90;
    }
        
*/
console.log(edad + ":" + edad1(edad));
edad = 0;
console.log(edad + ":" + edad1(edad));
edad = 90;
console.log(edad + ":" + edad1(edad));

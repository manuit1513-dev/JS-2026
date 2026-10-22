function listarAlmacen(almacen) {
  console.log("Elementos: " + almacen.length);
  for (let i = 0; i < almacen.length; i++) {
    const clave = almacen.key(i);
    console.log(clave + " = " + almacen.getItem(clave));
  }
}

localStorage.setItem("bgcolor", "red");
localStorage.setItem("font", "Helvetica");
localStorage.setItem("image", "myCat.png");
sessionStorage.setItem("temporal", "solo esta pestaña");

console.log("--- localStorage ---");
listarAlmacen(localStorage);
console.log("--- sessionStorage ---");
listarAlmacen(sessionStorage);

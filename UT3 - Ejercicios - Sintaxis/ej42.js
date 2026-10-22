function borrarPorPrefijo(almacen, prefijo) {
  let borradas = 0;
  for (let i = almacen.length - 1; i >= 0; i--) {
    const clave = almacen.key(i);
    if (clave.startsWith(prefijo)) {
      almacen.removeItem(clave);
      borradas++;
    }
  }
  return borradas;
}

localStorage.clear();
localStorage.setItem("usuario_nombre", "Ana");
localStorage.setItem("usuario_edad", "19");
localStorage.setItem("tema", "oscuro");

console.log(borrarPorPrefijo(localStorage, "usuario_"));
console.log(localStorage.length, localStorage.key(0));

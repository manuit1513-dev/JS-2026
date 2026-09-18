//console.log(i); -> Si no esta definido da error y no se ejecuta el resto del script.
const MAX = 10;
let seguir = true;
for (let i = 0; seguir == true; i++) {
  document.body.innerHTML += "<p>" + i + "</p>";
  if (i == MAX) seguir = false;
}

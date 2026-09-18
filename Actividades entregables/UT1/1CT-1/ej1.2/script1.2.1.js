const MAX2 = 1000;
let seguir2 = true;
for (let j = 900; seguir2 == true; j++) {
  document.body.innerHTML += "<p>" + j + "</p>";
  if (j == MAX2) seguir2 = false;
}

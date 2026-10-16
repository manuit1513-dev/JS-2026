function subir() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function bajar300() {
  window.scrollBy(0, 300);
}

function mostrarPosicionScroll() {
  console.log("Desplazamiento actual: " + window.scrollY + "px");
}

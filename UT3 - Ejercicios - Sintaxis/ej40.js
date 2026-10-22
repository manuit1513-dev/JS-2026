function guardarAlumno(alumno) {
  localStorage.setItem("alumno", JSON.stringify(alumno));
}

function leerAlumno() {
  const texto = localStorage.getItem("alumno");
  return texto === null ? null : JSON.parse(texto);
}

guardarAlumno({ nombre: "Ana", edad: 19, aficiones: ["cine", "música"] });

const alumno = leerAlumno();
console.log(alumno);
console.log(Array.isArray(alumno.aficiones), alumno.aficiones.length);

localStorage.setItem("alumnoMal", { nombre: "Ana", edad: 19 });
console.log(localStorage.getItem("alumnoMal"));

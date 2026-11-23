let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maxSalario = 0;
  let maxNombre = null;

  //de esta manera este bucle me permite acceder a cada clave y valor del objeto
  for (const [nombre, salario] of Object.entries(salaries)) {
    if (salario > maxSalario) {
      maxSalario = salario;
      maxNombre = nombre;
    }
  }

  return maxNombre;
}

console.log(topSalary(salaries));

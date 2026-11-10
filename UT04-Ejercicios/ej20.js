let salaries = {
  Juan: 100,
  Pedro: 300,
  Marta: 250,
};
function sumarSalarios(salarios) {
  let sum = 0;

  let numeros = Object.values(salarios);

  for (const num of numeros) {
    sum += num;
  }

  return sum;
}
let vacio = {};
console.log(sumarSalarios(salaries));
console.log(sumarSalarios(vacio));

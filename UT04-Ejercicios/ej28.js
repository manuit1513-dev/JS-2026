let user = {
  name: "John",
  years: 30,
};

let { name: nombre, years: age, isAdmin = false } = user;

console.log(nombre);
console.log(age);
console.log(isAdmin);

function multiplyNumeric(obj) {
  for (const prop of Object.keys(obj)) {
    if (typeof obj[prop] == "number") {
      obj[prop] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "Mi menú",
};

multiplyNumeric(menu);
console.log(menu);

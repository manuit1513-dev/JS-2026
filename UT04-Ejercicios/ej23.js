function Calculator() {
  this.read = function () {
    this.a = +prompt("Introduce el primer valor (a):", 0);
    this.b = +prompt("Introduce el segundo valor (b):", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

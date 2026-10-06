function bonoloto() {
  let array = [];
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  function randomInteger2(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  for (let i = 1; i < 7; i++) {
    array = array + " " + randomInteger(1, 49);
  }
  array = array + " " + randomInteger2(0, 9);
  console.log(array);
}
bonoloto();

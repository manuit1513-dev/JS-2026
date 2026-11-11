function isEmpty(obj) {
  if (Object.keys(obj).length == 0) {
    return true;
  } else {
    return false;
  }
}
let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "Hora de levantarse";
console.log(isEmpty(schedule)); // false

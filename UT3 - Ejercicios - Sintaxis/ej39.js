function recuperarFecha() {
  const dia = localStorage.getItem("dia");
  const mes = localStorage.getItem("mes");
  const anno = localStorage.getItem("anno");

  if (dia === null || mes === null || anno === null) return null;

  return new Date(Number(anno), Number(mes) - 1, Number(dia));
}

console.log(recuperarFecha());

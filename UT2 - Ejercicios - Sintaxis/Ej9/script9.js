if (-1 || 0) alert("primero"); // SI, porque -1 es un valor verdadero
if (-1 && 0) alert("segundo"); //NO, -1 es verdadero pero 0 no por lo que no se ejecuta
if (null || (-1 && 1)) alert("tercero"); // SI, como -1 && 1 es true aunq null sea falso si se ejecuta

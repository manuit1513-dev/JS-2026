alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 2, alert(1) devuelve undefined por lo que 2 es el 1er resultado correcto
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // undefined
alert(null || (2 && 3) || 4);
/* 3, 1º hace el parentesis como 2 es true y 3 tb se queda con el el 3 y queda asi
null || 3 || 4  y como null es falso el 1er valor true es 3*/

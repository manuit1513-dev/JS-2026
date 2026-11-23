let producto = {
  id: 101,
  nombre: "Teclado mecánico",
  precio: 75,
  marca: "Logi",
  categoria: "Periféricos"
};

/*Guarda nombre en una variable llamada titulo.
Guarda precio en precio.
Guarda descuento en descuento (si no existe en el objeto, que valga 0).
Guarda el resto de propiedades (id, marca, categoria) en un objeto llamado detalles.
*/

let {nombre:titulo, precio, descuento = 0, ...detalles} = producto;

/*Ahora imagina que ya tienes declaradas de antes las variables let id, marca;.
Escribe la sentencia para asignarles los valores de producto usando desestructuración (ojo con la sintaxis de las llaves en reasignación).
*/
let id, marca;
({id, marca} = producto);

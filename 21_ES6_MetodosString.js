/* NUEVOS MÉTODOS DEL OBJETO STRING */

const cadena = "¡Hola, caracola!";

//startsWith(cadena_busqueda[, posicion]): devuelve true o false si la cadena comienza 
// por el primer argumento indicado a partir del segundo argumento (opcional)
console.log(cadena.startsWith("¡Hol"));
console.log(cadena.startsWith("car",7));

//endsWith(cadena_busqueda[, posicion]): devuelve true o false si la cadena acaba 
// por el primer argumento indicado a partir del segundo argumento (opcional)

//includes(cadena_busqueda): devuelve true o false si la cadena 
// contiene el texto pasado como argumento.
console.log(cadena.includes("caracola"));
console.log(cadena.includes("Adios"));

//repeat(numero): devuelve una cadena repetida tantas veces como se indique 
// en el número pasado como argumento
console.log(cadena.repeat(5));
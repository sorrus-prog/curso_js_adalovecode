/* SET: es un objeto que permite almacenar valores UNICOS de cualquier tipo, incluidos valores
primitivos o referencias a objetos.
Para considerar dos objetos iguales debe cumplirse la igualdad estricta (===), con la exepcion
de +0 y -0 que se consideran iguales, u -NaN y NaN, que tambien.
*/

//SINTAXIS: new Set ([iterable])
//iterable debe ser un array o cualquier otro objeto iterable, sus elementos se añadiran al set
// de lo contrario estará vacio

let provincias = new Set (["Caracas", "Maracay", "Valencia", "Caracas"]);
let numero = new Set ([1,2,6,5,9,5,2,1]);
let mezcla = new Set ([1, "ET", "Mi casa"]);

//PROPIEDADES:
//size: tamaño del set
console.log("El numero de provincias NO repetidas es "+provincias.size);
console.log("El numero de numeros no repetidos es "+numero.size);

//METODOS
//has: comprueba si Set tiene un elemento
console.log("Esta el elemento 2 en numeros ? "+numero.has(2));
console.log("Esta el numero 4 en numeros "+numero.has(4));

//delete: borra un elemento de set
numero.delete(2);
console.log("Esta el numero 2 "+numero.has(2));

//add: añade un elemento a set
provincias.add("Barquisimeto");
provincias.add("Caracas");
console.log("El número de provincias NO REPETIDAS ES "+provincias.size);

console.log("El numero de mezcla es "+mezcla.size);
let codigos = {34:"España", 33:"Francia"}
mezcla.add(codigos);
console.log("El numero de mezcla es "+mezcla.size);
console.log(mezcla);
mezcla.add({34:"España", 33:"Francia"});
console.log("El numero de mezcla es "+mezcla.size);
console.log(mezcla);

//clear: elimina todos los objetos del elemnto set
mezcla.clear();
console.log("El número de elementos de mezcla NO REPETIDOS es "+mezcla.size);

/* WEAKSET: son similares a los Set pero incorporan una serie de diferencias:
- Solo acepta colecciones de objetos.
- La referencia a las claves es debil: si no hay otras referencias al objeto que actúa como clave, el recolector de basura puede liberarlo, por lo que no hay una lista de objetos almacenados en la colección y no son enumerables.
- Dispone de tres métodos solo: add, delete y has.*/

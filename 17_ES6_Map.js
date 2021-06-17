/*
MAP:
Es un objeto que almacena pares clave-valor. Podemos utilizar objetos o valores primitivos 
tanto para ser usados como clave como para ser usados como valor. 

Objetos y Maps son similares en cuanto a funcionamiento (tienes asociadas claves a valores,
se puede acceder a cada valor, eliminar claves, ...). PEro hay diferencias:
-Las claves de un objeto son Strings y Symbols; las de un Map pueden ser cualquier tipo.
-Para saber el tamaño de un Map ustilizamos la propiedad size; en un objeto hay que hacerlo manualmente
-Map es iterable; para iterar object necesitmos primero las claves para iterar sobre el.
-Un Object tiene prototipo; claves por defecto en un Map pueden colisionar con las de un Object
*/

//SINTAXIS: new Map ([Iterable]);
// Iterable debe ser un array o cualquier otro objeto iterable con elementos clave-valor
let codigosPostales = new Map([[49, "Zamora"], [37, "Salamanca"], [47, "Valladolid"]]);
let matriculas = new Map([["ZA", "Zamora"],["SA","Salamanca"], ["VA", "Valladolid"]]);

//PROPIEDADES:
//size: tamaño del Map
console.log(codigosPostales.size);

//METODOS:
//get: devuelve el valor asociado a una clave (o undefined si no hay ninguno)
console.log(codigosPostales.get(49));

//set: establece un valor asociado a una clave
codigosPostales.set(47, "Pucela");
console.log(codigosPostales.get(47));

//has: comprueba si el Map tiene un elemento indicado por su clave o no
console.log(matriculas.has("ZA"));

//delete: elimina un elemento indicado por su clave
matriculas.delete("ZA");
console.log(matriculas.has("ZA"));

//clear: elimina todos los elementos de un objeto Map
codigosPostales.clear();
console.log("El tamaño de codigos postales es "+codigosPostales.size);

//ITERADORES:
//keys: devuelve un iterador con las claves del mapa ordenadas
//values: devuelve un iterador con los valores del Map ordenados
//entries: devuelve un iterador con los pares clave-valor ordenados del Map

let itClaves = matriculas.keys();
let itValores = matriculas.values();
let itPares = matriculas.entries();

console.log(itClaves.next().value);
console.log(itClaves.next().value);
console.log(itClaves.next().value);
console.log(itClaves.next().value);

/* WEAKMAP: son similares a los Maps pero incorporan una serie de diferencias:
- Solo acepta objetos como claves.
- La referencia a las claves es debil: si no hay otras referencias al objeto que actúa como clave, el recolector de basura puede liberarlo.
- No dispone de propiedades ni elementos relacionados con más de un elemento a la vez (values, entries, keys, clear, size...)
- No podemos iterarlo con un bucle for of. */
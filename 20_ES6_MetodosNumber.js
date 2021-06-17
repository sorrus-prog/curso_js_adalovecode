/* NUEVOS MÉTODOS GLOBALES DEL OBJETO NUMBER */
//Son métodos que se han incorporado a los objetos globales Number o Math. Antes formaban parte de los objetos definidos por el usuario.

//Number.isInteger(numero): devuelve true si es entero (positivo o negativo) y false en caso contrario
console.log("¿1.5 es entero? "+Number.isInteger(1.5));

//Number.isNaN(numero): comprueba si un valor contiene NaN (¡Ojo! Solo si contiene NaN, no si no es un número). Es más robusta que la función global isNan(): no fuerza la conversión del parámetro a un número, por lo que solo los valores de tipo número que son NaN devuelven true.
console.log("¿La cadena 'NaN' no es un número? "+Number.isNaN("NaN"));      // false
console.log("¿undefined no es un número? "+Number.isNaN(undefined));  // false
console.log("¿{} no es un número? "+Number.isNaN({}));         // false
console.log("¿La cadena 'pepe' no es un número? "+Number.isNaN("pepe"));   // false

console.log("¿La cadena 'NaN' no es un número? "+isNaN("NaN"));      // false
console.log("¿undefined no es un número? "+isNaN(undefined));  // false
console.log("¿{} no es un número? "+isNaN({}));  // false
console.log("¿La cadena 'pepe' no es un número? "+isNaN("pepe"));         // false

console.log("¿El número 13 es NaN? "+Number.isNaN(13));
console.log("¿El número 13 es NaN? "+isNaN(13));

console.log("¿NaN es NaN? "+Number.isNaN(NaN));

//Number.isSafeInteger(numero): devuelve true si el número se encuentra dentro del rango de 53 bits que determina que no hay pérdida de precisión. También se definen las constantes Number.MAX_SAFE_INTEGER y Number.MIN_SAFE_INTEGER
console.log("¿Es seguro 999999? "+Number.isSafeInteger(999999));
console.log("¿Es seguro 9999999999999999? "+Number.isSafeInteger(9999999999999999));
console.log("El mayor entero seguro es "+Number.MAX_SAFE_INTEGER);
console.log("El menor entero seguro es "+Number.MIN_SAFE_INTEGER);

//Funcionan igual que las funciones globales.
//Number.isFinite(numero): comprueba si un número es finito.
//Number.parseInt(numero): parsea un número a entero.
//Number.parseFloat(numero): parsea un número a float.
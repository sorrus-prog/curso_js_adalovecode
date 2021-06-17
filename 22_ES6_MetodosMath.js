/* NUEVOS MÉTODOS DEL OBJETO MATH */

//Math.trunc(): devuelve la parte entera de un número, eliminando el punto y los dígitos a su derecha.
//Equivale a Math.floor() si el argumento es positivo; si no a Math.ceil()
console.log(Math.trunc(12.3456));

//Math.sign(): devuelve el signo de un número, pudiendo ser el valor devuelto
// 1 (positivo), -1 (negativo), 0 (cero positivo), -0 (cero negativo), NaN (valor NaN)
console.log(Math.sign(-7));
console.log(Math.sign(7));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(NaN));
console.log(Math.sign("otra cosa"));

//Math.cbrt(): devuelve la raíz cúbica de un número pasado por parámetro
console.log(Math.cbrt(64));

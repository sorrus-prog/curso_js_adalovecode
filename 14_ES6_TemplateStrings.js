/*
Las plantillas de cadenas de texto (template strings) son literales de texto que habilitan el
uso de:
-Expresiones incrustadas ${expresion}
-Cadenas de texto de mas de una linea
-Interpolacion de expresiones
-Plantillas con una funcion de preprocesado
Nota: para escapar de una plantilla se usa \

SINTAXIS:
`cadena de texto`

`Linea 1 de la cadena de texto
 linea 2 de la cadena texto`

`cadena de texto ${expresion} texto`

tag `cadena de texto ${expresion} texto`

*/

//Cadenas de mas de una linea
//ES5: Para hacer un salto de linea 
console.log("hola \n\
caracola");

//ES6: Para hacer un salto de linea
console.log(`Agur
yogur`);

//Interpolacion de expresiones
let num1 = 2;
let num2 = 4;
//ES5 
console.log("La suma es" + (num1 + num2) + "\n y la resta" + (num1 - num2) + ".");
//ES6
console.log(`La suma es ${num1 + num2} 
y la resta ${num1 - num2}.`);
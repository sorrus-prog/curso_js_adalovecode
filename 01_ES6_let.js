//Creación de variables con let

/*let declara una variable limitando su ambito (scope) al bloque,
declaracion o expresion donde se está usando*/

//SINTAXIS: let nombreVariable [=valor];

var persona = "Ada";
var persona = "Lovelace" // var permite redeclarar la variable monstrando la ultima  declaracion
console.log(persona)

let persona2 = "Charles"
persona2 = "Federico" // let no deja redeclarar la variable si se usa el keyword "let" y muestra error de sintaxis
console.log(persona2)
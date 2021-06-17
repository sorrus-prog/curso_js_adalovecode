/* 
for...of es una sentencia que ejecuta un bloque de codigo para cada uno de los elementos 
de un objeto iterable como podria ser un String, Array, Map y Set y otros iterables
definidos por el usuario.

for ... in itera sobre las propiedades de un objeto; pero for ... of es especifica para 
las colecciones y no para todos los objetos.

//SINTAXIS:
//for (variable of iterable){
    //Sentencia
}
*/

//sobre un Array
let precios = [100, 250, 300];
for (let precio of precios){
    console.log("El precio sin iva "+precio);
    precio *= 1.19;
    console.log("El precio con IVA es "+precio);
}

//Sobre un String
let cadena = "Hola, caracola";
for (let elemento of cadena){
    console.log(elemento);
}

//Sobre un Map
let matriculas = new Map([["ZA", "Zamora"], ["SA", "Salamanca"], ["VA", "Valladolid"]]);
for (let matricula of matriculas){
    console.log(matricula);
}

for (let [matricula, provincia] of matriculas){
    console.log(matricula + " " + provincia);
}

//Sobre un Set
let tiradasDado = new Set([1,2,3,5,2,2,5,2,1]);

for (let tirada of tiradasDado){
    console.log(tirada);
}
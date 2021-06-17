/* NUEVOS MÉTODOS DEL OBJETO ARRAY */

//findIndex: devuelve el índice del array del primer elemento que cumple con una condición
//Es similar a indexOf, pero hay que pasar como argumento una función flecha; permite detectar NaN
//SINTAXIS: let posicion = miArray.findIndex(x => condicion_x)

const array = [1, 5, NaN, 7];
console.log(array.findIndex(x => Number.isNaN(x))); //Devuelve 2
console.log(array.findIndex(x => x > 5)); //Devuelve 3

//find: similar al anterior pero en lugar de devolver la posición, devuelve el valor del elemento;
//También hay que pasarle una función flecha
console.log(array.find(x => Number.isNaN(x))); //Devuelve NaN
console.log(array.find(x => x > 5)); //Devuelve 7

//fill: crea un array de un tamaño determinado e indicializa su contenido
//SINTAXIS: const array = new Array(tamaño).fill(valor, inicio?, fin?);

const array2 = new Array(5).fill('x');
console.log(array2); //[x, x, x, x, x]
const array3 = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g');
array3.fill(null, 3, 5);
console.log(array3);

//copyWithin: copia los elementos que están entre los índices de inicio y fin a partir de una posición
//SINTAXIS: miArray.copyWithin(posicion, inicio, fin = this.length)
const array4 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
array4.copyWithin(2, 5, 7);
console.log(array4);

//Para recorrer un array podemos utilizar for...of

//Iteradores
//Object.keys: devuelve un iterador con los elementos del array en orden
//En la especificación ES5, si el argumento no es un objeto priitivo da error;
// en ES6 se transforma a objeto
//Object.values: devuelve un ierador con los valores del array en orden
//entries: devuelve un iterador con los pares del array en orden
console.log("ITERADORES");
const array5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(Object.keys(array5));
console.log(Object.values(array5));
console.log(Object.entries(array5));


//MÉTODOS ESTÁTICOS
console.log("METODOS ESTÁTICOS");
//Array.from(): permite convertir a arrays los elementos iterables y pseudoarrays.
//Podemos crear arrays a partir de Maps, Sets, Strings, iterables obtenidos a partir de array.keys(), etc.
const pseudoarray = {length: 2, 0: 'x', 1: 'y'};
/*for (const elemento of pseudoarray){
    console.log(elemento); //Error: pseudoarray no es un iterable
}*/
const arrayNuevo = Array.from(pseudoarray);
for (const elemento2 of arrayNuevo){
    console.log(elemento2); 
}

//Array.of(): crea un array con aquellos elementos que recibe como arbumento
const array6 = Array.of('Manzana', 'Platano', 'Pera');
console.log(array6);

//Agujeros en arrays: elementos que no existen
const array7 = ['Manzana', 'Plátano',,,, 'Pera']
console.log(array7[3]);
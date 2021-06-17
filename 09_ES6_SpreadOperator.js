/* La sintaxis extendida o spread sintax permite:
- A elementos iterables (arrays, cadenas ...) ser expandidos donde se esperan 
cero o mas argumentos (para llamadas a funciones) o elementos (para Arrays literales).
- A un objeto ser expandido en lugares donde se esperan 0 o mas pares de valor clave (para 
    literales de tipo objeto).*/

//SINTAXIS:
//Para arrays literales o cadenas
///[...objetoIterable, 'a', 'caracola', 7];

//Para llamadas a funciones
//mi funcion(...objetoIterable)

//Para literales de tipo Object 
//let clon {...obj};

//ARRAY:
console.log(Math.max(3,1,7)); //Devuelve 7
let array = [3,1,7];
console.log(Math.max(array)); //Devuelve NaN
console.log(Math.max(...array)); //Devuelve 7
let array2 = [2,6,8];
console.log(Math.max(...array, 5, ...array2, 4)); // Devulve 8

// Concatenar dos arrays en uno
let arrayResultante = [...array, ...array2];

//Copiar un array en otro array
let arratCopia = [...array2];

//CADENAS
let saludo = "Hola, caracola";
console.log(...saludo);

//FUNCIONES
function suma (a,b,c){
    return a + b + c;
}
const VALORES = [1,3,5];
console.log(suma(...VALORES));

//OBJETOS
let persona1 = {nombre:"Ada", nacimiento: 1815};
let persona2 = {nombre2:"Charles", nacimiento2: 1945};
//Tenemos que cambiar los nombres de los elementos si no queremos que se sobreescriban

let clonAda = {...persona1}; //Modo correcto de crear una copia de un objeto
console.log(clonAda);

let adaCharles = {...persona1, ...persona2};
console.log(adaCharles);
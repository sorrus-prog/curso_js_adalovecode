/* La sintaxis del parametro REST nos permite representar un numero
indefinido de argumentos como un array*/ 

//SINTAXIS: function (a,b, ...theArgs){

//}

//ES5 

function miLista(a,b){
    console.log("ARGUMENTS");
    console.log("a="+a);
    console.log("b="+b);
    console.log("El resto de los elementos: ", arguments);
    console.log("Tamaño"+arguments.length);
    console.log(arguments[2]);
}
miLista("pera", "manzana", "zanahoria", "melon", "lima", "limon");

//ES6
function miLista2(a,b, ...otrosElementos){
    console.log("REST");
    console.log("a="+a);
    console.log("b="+b);
    console.log("El resto de los elementos: ", otrosElementos);
    console.log("Tamaño"+otrosElementos.length);
    console.log(otrosElementos[2]);
}
miLista2("pera", "manzana", "zanahoria", "melon", "lima", "limon");

/* Las funciones flecha son una alternativa compacta a una funcion convencional
No son adecuadas para ser utilizadas como metodos,
y no pueden ser usadas como constructores
*/

//
/*SINTAXIS: (param1, param2, ..., paramN) =>{Sentencia}
            (param1, param2, ..., paramN) => expresion
            () => {return expresion}

            Parentesis opcionales con un solo parametro
            (parametro) => {sentencia}
            parametro => {sentencias}

            Parentensis obligatorios si la funcion no tiene parametros
            () => {sentencias}
*/

var miFuncion = function (){
    return new Date();
}

var miFuncion = () => new Date();

var arraysConcatenado = function (array1, array2){
    return array1.concat(array2);
}
console.log(arraysConcatenado([1,2],[3,9,8]));

var arraysConcatenado2 = (array1, array2) => array1.concat(array2);
console.log(arraysConcatenado([1,2],[3,9,8]));

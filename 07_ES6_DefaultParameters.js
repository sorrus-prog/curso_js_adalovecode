/* Los parametros por defectos de una funcion permiten que los parametros formales 
sean inicializados con valores por defecto si no se pasan valores 
o los valores pasados son undefined (por defecto lo son) */ 

//SINTAXIS:
/* function [nombre](param1 [ = valorPorDefecto1]){
    declaraciones
} */

//ES5:
function multiplicacion (a,b){
   // if (typeof b === 'undefined') b = 1;
//b = typeof b !== 'undefined' ? b : 1;

return a*b;
}
console.log(multiplicacion(8));

//ES6:
function multiplicacion2 (a,b=2) {
     return a  *b ;
    }
console.log(multiplicacion2(9));
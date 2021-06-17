//AMBITO DE VARIABLES

/*El ambito de una variable (scope), es la zona del programa en la que se define.
En Javascript son dos: local y global
Mediante var podemos definir como ambito local el ambito de una funcion.
con let, por el contrario, podemos diferenciar tambien el ambito de bloque.
*/

function ambito(){
    "use strict"
    let a = "ambito de funcion";
    if(true){
        let a = "ambito de bloque";
        console.log("El ambito de bloque es "+a)
    }
    console.log("el ambito de funcion es "+a)
}
    ambito();
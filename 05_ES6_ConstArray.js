/*AL igual que otros tipos de datos, podemos declarar arrays constantes con const.
No podemos redefinirlos utilizando el igual como lo hariamos con una variable, pero si 
podemos cambiar sus valores uno a uno*/

function cambiarArray(){
    "use strict";

    const MIARRAY = [1,2,3];
    console.log(MIARRAY);

    //MIARRAY = [4,5,6]; // Devuelve error porque las constantes no se pueden redeclara
   
    MIARRAY[0] = 4
    MIARRAY[1] = 5
    MIARRAY[2] = 6
    console.log(MIARRAY); //Pero si cambiamos los valores uno a uno si lo acepta

}
cambiarArray();


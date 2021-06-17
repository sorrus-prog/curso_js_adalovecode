//USE STRICT O MODO ESTRICO

/* "use strict" es una linea que indica que el codigo debe ser usado "en modo estricto",
es decir, no puede usar variables no declaradas.
Fuera de una funcion, tiene ambito global; dentro de ella, local (el de la funcion)*/ 

//SINTAXIS: "use strict";

"use strict";

let persona;
nacimiento;

function informacion (){
    persona = "Anda";
    nacimiento = "1815";
    console.log(persona + " nacio en "+ nacimiento);
}
informacion();
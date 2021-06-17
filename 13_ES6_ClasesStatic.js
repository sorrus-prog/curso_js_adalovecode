/* Utilizamos static para definir un metodo estatico en una clase.
Al igual que en otros lenguajes de programacion, un metodo estatico se llama directamente
sin instanciar la clase (de hecho, no puede hacerse mediante la instancia de clase).
Se suelen utilizar para crear funciones utiles en una aplicacion.
No es necesario crear un objeto para llamar a un metodo estatico.
*/
window.onload = inicio;

function inicio(){

class Rectangulo {
    constructor (x, y){
        this._base = x;
        this._altura = y;
    }
static area (a, b) {
    return a * b;
    }
static perimetro (a, b){
    return a + a + b + b;
    }
}

let rectangulo1 = new Rectangulo (3, 2);
//console.log(rectangulo1.area(2,3));
//console.log(rectangulo1.perimetro(2,3));
mensajes.innerHTML = Rectangulo.area(2,3)
mensajes.innerHTML += Rectangulo.perimetro(8,3)
}
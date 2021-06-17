/* Para crear herencia de clases hay que usar la palabra extends.
Una clase creada con herencia hereda todos los metodos de la otra clase.
*/

window.onload = inicio;

function inicio(){

class Telefono{
    constructor (marca){
        this.marca = marca;
    }
    anuncio(){
        return "Ha llegado el nuevo telefono de "+this.marca;
    }
}
class Modelo extends Telefono{
    constructor (marca, modelo){
        super(marca);
        this.modelo = modelo;
    }
    anuncioCompleto(){
        return this.anuncio()+":el modelo "+ this.modelo;
    }
}
let miTelefono = new Modelo ("Google", "Pixel")
mensajes.innerHTML = miTelefono.anuncioCompleto();
}


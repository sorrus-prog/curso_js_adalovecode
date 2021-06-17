/* 
Los metodos get y set se utilizan para asignar y extraer atributos de un objeto.
Es muy importante tener en cuenta que el nombre de los getters/setters no puede ser el mismo
que la propiedad porque se produciria un bucle, pues al acceder a la propiedad invocariamos al 
metodo que accede a la propiedad que invoca al metodo, etc..
Por ello muchos desarrolladores usan el guion bajo para nombrar la propiedad
*/

window.onload = inicio;

function inicio(){

class Telefono {
    constructor (marca){
        this._marca = marca;
    }
    get marca(){
        return this._marca;
    }
    set marca(mar){
        this._marca = mar;
    }
}

let miTelefono = new Telefono("Google");
miTelefono.marca = "Iphone"
mensaje.innerHTML = "Mi telefono es un : "+miTelefono.marca;

}
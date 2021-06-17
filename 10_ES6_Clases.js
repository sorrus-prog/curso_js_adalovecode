/* Las clases son una mejora sintactica sobre la herencia basada en prototipos de JS
-Ofrecen una sintaxis mas simples para crear objetos
-No utiliza la palabra function, sino la palabra class
-Las propiedades se asignan en un metodo constructor(), no en la clase en si
*/

class Telefono {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

let miTelefono = new Telefono("Google", "Pixel");
console.log(miTelefono.marca+" "+ miTelefono.modelo);
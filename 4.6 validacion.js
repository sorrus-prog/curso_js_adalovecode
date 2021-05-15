//SELECCION DE FORMULARIO

//Conociendo el id
var formulario = document.getElementById("miFormulario");
var formulario2 = document.forms["miFormulario"]; //forms devuelve un array de formulario

//Conociendo el numero de formulario en la pagina
var formulario3 = document.getElementsByTagName("form")[0]; //se le pasa la etiqueta y entre corchetes la posicion
var formulario4 = document.forms[0]; //Se le pasa la posicion

//SELECCIONAR ELEMENTOS DE UN FORMULARIO
//.elements[] Devuelve un array con todos los inputs de un formulario
//getElementById("idElemento") devuelve un elemento con un id determinado
//getElementsByTagName("etiqueta") devuelve un array de elementos de tipo etiqueta(input, select, etc)
//getElementsByName("nombre") devuelve un array con los elementos que tienen el mismo nombre

window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre(){
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if (elemento.value == "") {
        alert("El campo no puede ser vacio");
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono (){
    var elemento = document.getElementById("tel");
    if(isNaN(elemento.value)){
        alert("El campo tiene que ser numerico")
        return false;
    }
    return true;
}

function validaFecha(){
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    var fecha = new Date(ano, mes, dia);
    if (isNaN(fecha)){
        alert("Los campos de la fecha son incorrectos");
        return false;
    }
    return true;  
}

function validaChek(){
    var campoChek = document.getElementById("mayor");
    if(!campoChek.checked){
        alert("Debes ser mayor de edad");
        return false;
    }
    return true;
}

function validar(e){
    if(validaNombre() && validaTelefono() && validaFecha()
        && validaChek() && confirm("Deseas enviar el formulario")){
            return true;
        } else{
            e.preventDefault();
            return false;
        }
}

function error(elemento){
    elemento.className ="error";
    elemento.focus();
}

function limpiarError(elemento){
    elemento.className = "";
}
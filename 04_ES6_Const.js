/* Las variables constantes en Javascript tienen ambito de bloque
al igual que las variables definidas utilizando let.
Es importante destacar que el valor de una constante no puede variar 
por tanto se asignan en el momento en que se declaran.
Para diferenciarlas de las variables conviene usar mayusculas
*/

function saludar(){

    const SALUDO = "Hola perinola"
    console.log(SALUDO);
}

saludar();
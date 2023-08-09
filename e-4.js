/*Dado una cadena de texto invertir el orden de sus caracteres usando estructuras de control*/


/*
1. Crear una función con parámetro texto
2. Crear una variable para guardar la cadena invertida.
3. Hacer un bucle que recorra el string y guarde los caracteres en la variable
4. Devolver esa variable
*/

function invertir(texto){
    let invertido = '';
    for(let letra of texto){
        invertido = letra + invertido;
    }

    return invertido;
}

//Usando el método reverse

function invertir(texto){
    return texto.split('').reverse().join('');
}
console.log(invertir('cosita'))
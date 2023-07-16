/* Encontrar el palíndromo */

function palindromo (texto){
    let invertido = texto
                    .split("")
                    .reverse()
                    .join("")
    return (invertido === texto);
}

console.log(palindromo("hola"));

/* Pasos a seguir */

/* 
1. Crear una función que reciba como parámetro el texto a evaluar
2. Separar el texto en un array de letras para evaluar cada letra
3. Darle la vuelta al array
4. Unir el array de letras en un string y comprararlo con el parámetro de la función
*/
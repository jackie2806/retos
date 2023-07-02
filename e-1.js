/* Enunciado: 
Dado un número, devolver su tabla de multiplicar completa
*/

function multiply (number){
    let table = '';   
    for(let i = 0; i <= 12; i++){            
        let result = number * i;
        table += `${number} x ${i} = ${result} \n`;        
    } 
   return table;
}

console.log(multiply(3));

/*Explicación de la resolución*/

/*
 1. Crear una función que tenga como parámetro el número del cual queremos hallar su tabla de multiplicar completa.
 2. Crear una variable dentro de la función que nos permita almacernar cada iteración, como vamos a almacernar valores concatenados, debemos iniciarla como un string vacío (comita sin espacio).
 3. Creamos un for para iterar cada uno de los valores que tenemos que multiplicar.
 4. La variable que fue declarada fuera del for, la inicializamos concatenando cada uno de los valores según el ciclo.
 5. Retornamos la variable que contiene el resultado final
*/
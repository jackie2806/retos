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

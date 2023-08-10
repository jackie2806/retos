//Dado un número entero, inviértelo y devuelve de nuevo el entero invertido

function invertirNumero(numero){
   let stringNumber = String(numero);

    let reverseNumber = stringNumber.split('').reverse().join('');
    //console.log(reverseNumber)    
    let newNumber = Number(reverseNumber);

    return newNumber;
}

console.log(invertirNumero(50100));

// otra solución

function invertirNumeros(numero){

    let invertido = parseInt(
                    numero
                    .toString()
                    .split('')
                    .reverse()
                    .join('')

    ) * Math.sign(numero);

    return invertido;
}

console.log(invertirNumeros(-15))
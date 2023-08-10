// Dados dos números, devolver cuántos números impares hay entre ellos

function impar(num1, num2){
    let count = 0;
    for(let i = num1; i <= num2; i++){
        if(i % 2 !== 0){
            count++
        }
    }
    
    return count;
}

console.log(impar(1,100))

// otra forma

function impares(num1, num2){
    let contador = 0;
    while(num1 < num2){
        if(num1%2 !== 0) contador ++;
        num1++;
    }
    return contador;
}

console.log(impares(1,10))
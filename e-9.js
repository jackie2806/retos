//Dado dos arrays devolver un array con solo los elementos comunes entre ellos

function printArr(arr1, arr2){
    //recibo una función con 2 parámetros (2 arrays)
    
    const newArr = [];
    //recorro los elementos de cada array 
    //recorrido del primer array
    for(let i = 0; i < arr1.length; i++){
        //recorrido del segundo array
        for(let j = 0; j < arr2.length; j++){
            //comparo si sus elementos son iguales
            if(arr1[i] === arr2[j]){
                newArr.push(arr1[i])
            }
        }
    }
    
 // Devuelvo el nuevo array con los elementos en común de ambos array
    return newArr;
}

console.log(printArr([1, 2,'cabeza'], [1]))

// Otra solución con métodos de Js

function elementosComunes(arr1, arr2){
    const filtro = arr1.filter(elemento => {
        return arr2.includes(elemento);
    });

    return filtro;
}

console.log(elementosComunes(['Auxy', 'Tomas', 'Pierre'], ['Pierre']))
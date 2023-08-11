//Dado dos arrays devolver un array con solo los elementos comunes entre ellos

function printArr(arr1, arr2){

    const newArr = [];

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                newArr.push(arr1[i])
            }
        }
    }
    return newArr;
}

console.log(printArr([1, 2,'cabeza'], [1]))
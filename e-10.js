/* Dado un número, mostrar con escalera de [-] usando el número para los niveles de la escalera
Ejemplo: 
[-]
[-][-]
[-][-][-]
[-][-][-][-]

*/

//Pasos a seguir

//Crear una función que reciba como parámetro un número positivo 
function escalera(numero){
    //Crear una variable que almacene el final caracter que tenemos que mostrar
    let caracterFinal = '';
    //Crear un ciclo que nos permita mostrar los caracteres según el número de pisos
    for(let i = 0; i < numero; i++){    //filas    
        let caracterPorPiso = '';
        for(let j = 0; j <= i ; j++){ //columnas, aquí el bucle se controla por el número de filas que representa i
            caracterPorPiso+= '[-]';
        }
        caracterFinal += caracterPorPiso + '\n';
    }

    return caracterFinal;
}
console.log(escalera(5))



//Mostrar la variable que devuelve la escalera

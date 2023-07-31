/* Dada una palabra buscarla en una frase y devolver cuántas veces aparece en ella. 
La frase y la palabra deben ser parámetros de una fucción*/

/*Solución*/

/* 
1. Función con dos parámetros "frase" y "búsqueda"
2. Poner string en minúsculas y limpiarlo de otros caracteres.
3. Comprobar si la búqueda está incluída en la frase.
4. Crear un array de palabras de la frase
5. Mapear esas palabras y hacer un contador de cada una
6. Devolver el contador de la búsqueda
*/

function coincidencias(frase, busqueda){
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, '');
    let resultado = 0; 
    let busqueda_limpio = busqueda.toLowerCase();
    if(texto_limpio.includes(busqueda_limpio)){
        let palabras = texto_limpio.split(' ');
        let mapa = {};
        for (let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++;
            } else {
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[busqueda_limpio];
    } else {
        resultado = 0;
    }
    return resultado;
}

console.log('Coincidencias:', coincidencias('Hola, soy Jackeline, Jackeline, Jackeline.', 'Jackeline' ))
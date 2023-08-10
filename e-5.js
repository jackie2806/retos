// Enunciado
//¿Cuánto es el X por ciento de X número?
function tantoPorCiento(porcentaje, numero){
    let operacion = (numero * (porcentaje/100));
    let resultado = `El porcentaje de ${numero} es ${operacion}`;

    return resultado;

}

console.log(tantoPorCiento(20,100))
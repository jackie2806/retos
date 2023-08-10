// Dibujar cuadrato hueco con asteriscos

/*
Pasos a seguir:
1. Crear una función para crear el lado de arriba y de abajo del cuadrado
2. Crear una función que haga los lados y el hueco del cuadrado
3. Hacer un bucle de 0 al tamaño de lado menos 2 para equilibrar con el lado de arriba y abajo.
4. Hacer otro bucle para pintar los espacios, menos 2 para equilibrar con el asterisco de la izquierda y la derecha
5. Ir concatenando en una variable cada línea del cuadrado.
6. Mostrar el cuadrado en la función principal
*/

function lado(numero){
    let lado = '';
    for(let i = 0; i < numero; i++){
        lado += '*';
    }
    return lado;
}

function cuadrado(numero){
    
    let dibujo = lado(numero)+'\n'; // lado de arriba
    let contenido = ''; //filas interiores del cuadrado
    
    for(let i = 0; i < (numero-2); i++){
        contenido = '*';

        for(let j = 0; j < (numero -2); j++){
            contenido += ' '; //espacios en blanco del cuadrado
        }
        contenido += '*';
        dibujo += contenido + '\n';
    }
    dibujo += lado(numero); //lado de abajo
    return dibujo;
}

console.log(cuadrado(5));
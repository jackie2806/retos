// Juego
function puntuar(puntaje) {
  let count = 0;
  if (puntaje > 0) {
    
    const arrRegistro = [];
    arrRegistro.push(puntaje);
    
    // regla 1
    let regla1 = 0; //sumo las 2 últimas puntuaciones
    if (arrRegistro !== null) {
      for (let i = arrRegistro.length; i < 1; i--) {
        regla1 += arrRegistro[i - 1] + arrRegistro[i];
      }
    }
    // regla 2
    let regla2 = 0;
    regla2 = regla1 * 2;
    // regla 3
    let regla3 = arrRegistro.pop();

    //sumatoria de puntajes
    for (let i = 0; i < arrRegistro.length; i++) {
      count += arrRegistro[i];
    }
  }
  return count;
}

console.log(puntuar(10));


function puntuar(puntaje) {
    let count = 0;
    if (puntaje > 0) {
      const arrRegistro = [];
      arrRegistro.push(puntaje);
  
      // regla 1
      let regla1 = 0;
      if (arrRegistro.length >= 2) { 
        for (let i = arrRegistro.length - 1; i >= arrRegistro.length - 2; i--) {
          regla1 += arrRegistro[i]; 
        }
      }
      
      // regla 2
      let regla2 = regla1 * 2;
  
      // regla 3
      let regla3 = 0;
      if (arrRegistro.length > 0) {
        regla3 = arrRegistro[arrRegistro.length - 1]; 
        arrRegistro.pop();
      }
  
      // sumatoria de puntajes
      for (let i = 0; i < arrRegistro.length; i++) {
        count += arrRegistro[i];
      }
  
      // Sumar las reglas 1, 2 y 3 al total
      count += regla1 + regla2 + regla3;
    }
    return count;
  }
  
  // Ejemplo de uso:
  const puntajeTotal = puntuar(10);
  const nuevoPuntaje = puntuar(20)
  console.log('Puntaje total:', puntajeTotal, nuevoPuntaje); 
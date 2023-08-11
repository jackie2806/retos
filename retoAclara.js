// Juego
function puntuar(puntaje) {//recibo un array de instrucciones
  let count = 0;
  if (puntaje > 0) {    
    const arrRegistro = [];
    arrRegistro.push(puntaje);
    
    // regla 1
     //sumo las 2 últimas puntuaciones
    if (arrRegistro >= 2) {
      for (let i = arrRegistro.length; i < 1; i--) {
        let sumElements = arrRegistro[i - 1] + arrRegistro[i];
        arrRegistro.push(sumElements)
      }
    }
    console.log(arrRegistro)
    // regla 2
    for(let i = arrRegistro.length; i < 1; i--){
      let penultimoDoble = arrRegistro[i-1]*2;
      console.log('pera',penultimoDoble)
      arrRegistro.push(penultimoDoble)
    }
 
    // regla 3
     arrRegistro.pop();
    console.log(arrRegistro)
    //sumatoria de puntajes
    for (let i = 0; i < arrRegistro.length; i++) {
      if(arrRegistro !== false){
        return 0;
      } else {
        count += arrRegistro[i];
      }
      
    }
  }
  return count;
}

console.log(puntuar(10));
console.log(puntuar(15));


var misc = require("../_Miscellaneous/misc.js")

/*
La seguente funzione ordina l'array utilizzando il selection sort
Prende il minimo valore del vettore e lo sposta in cima
Parametro -> Array = L'array sul quale si vuole effettuare il sort
Return -> Array = Restituisce l'array ordinato
*/
function selectionSort(inputArr) { 
  let n = inputArr.length;
      
  for(let i = 0; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for(let j = i+1; j < n; j++){
          if(inputArr[j] < inputArr[min]) {
              min=j; 
          }
       }
       if (min != i) {
           // Swapping the elements
           let tmp = inputArr[i]; 
           inputArr[i] = inputArr[min];
           inputArr[min] = tmp;      
      }
  }
  return inputArr;
}

module.exports = {
  selectionSort
}
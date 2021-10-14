/*
La seguente funzione ordina l'array utilizzando il selection sort
Prende il minimo valore del vettore e lo sposta in cima
Parametro -> Array = L'array sul quale si vuole effettuare il sort
Return -> Array = Restituisce l'array ordinato
*/

function selectionSort(array){
  let swapper, minIndex;
  for(let i=0; i<array.length; i++){
    minIndex = min(array,i);
    swapper = array[i];
    array[i] = array[minIndex];
    array[minIndex] = swapper;
    console.log(a);
  }
  return array;
}

/*
La seguente funzione trova il l'indice del valore minimo di un array a partire da un indice
Parametro -> Array = L'array di cui si vuole trovare il minimo
Parametro -> Index = L'indice dal quale si vuole cominciare a cercare il minimo
Return -> Min = L'indice del valore minimo
*/

function min(array,index){
  let min=index;
  for(let i=index+1; i<array.length; i++){
    if(array[i]<array[min]) min = i;
  }
  return min;
}


var a = [5,6,7,2,3,4,4,44,2];
console.log(selectionSort(a));

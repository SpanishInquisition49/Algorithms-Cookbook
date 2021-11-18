const misc = require("../_Miscellaneous/misc");

function mergeSort(array) {
    const half = Math.trunc(array.length / 2)
    if(array.length < 2)
      return array 
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0])
            arr.push(left.shift())  
        else
            arr.push(right.shift()) 
    }
    return [ ...arr, ...left, ...right ]
}

module.exports = {
    /*
    La seguente funzione ordina l'array utilizzando il merge sort
    Parametro -> array = L'array sul quale si vuole effettuare il sort
    Return -> un nuovo array ordinato
    Side Effects -> l'array sul quale viene eseguita la funzione viene alterato
    */
    mergeSort,
    /*
    La seguente funzione esegue il merge su due array ordinati
    Parametro -> left = array ordinato
    Parametro -> right = array ordinato
    Return -> array ordinato di dimensione left.length + right.length
    */
    merge
}
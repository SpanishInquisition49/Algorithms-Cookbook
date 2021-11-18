const misc = require("../_Miscellaneous/misc");

function insertionSort(a){
    for(let j = 1; j<a.length; j++){
        let key = a[j];
        let i = j-1;
        while(i>=0 && a[i] > key){
            a[i+1] = a[i]
            i--;
        }
        a[i+1] = key;
    }
}

module.exports = {
    /*
    La seguente funzione ordina l'array utilizzando l'insertion sort
    Parametro -> a = L'array sul quale si vuole effettuare il sort
    */
    insertionSort
}
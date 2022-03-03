"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = void 0;
/*
La seguente funzione ordina l'array utilizzando il selection sort
Prende il minimo valore del vettore e lo sposta in cima
Parametro -> Array = L'array sul quale si vuole effettuare il sort
Return -> Array = Restituisce l'array ordinato
*/
function selectionSort(inputArr) {
    var n = inputArr.length;
    for (var i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        var min = i;
        for (var j = i + 1; j < n; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min != i) {
            // Swapping the elements
            var tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
        }
    }
    return inputArr;
}
exports.selectionSort = selectionSort;
//# sourceMappingURL=SelectionSort.js.map
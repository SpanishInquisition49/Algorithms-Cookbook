"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = void 0;
/*
La seguente funzione trova la prima occorrenza del valore v passato come argomento
Parametro -> a = L'array in cui si vuole effettuare la ricerca
Parametro -> v = valore di cui si vuole sapere l'indice nell'array
Return ->  l'indice della prima occorrenza di v oppure null se v non è presente nell'array a
*/
function linearSearch(a, v) {
    for (var i = 0; i < a.length; i++)
        if (a[i] == v)
            return i;
    return null;
}
exports.linearSearch = linearSearch;
//# sourceMappingURL=LinearSearch.js.map
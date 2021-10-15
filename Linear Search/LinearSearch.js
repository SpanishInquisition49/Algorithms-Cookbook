/*
La seguente funzione trova il l'indice del valore v passato come argomento
Parametro -> a = L'array in cui si vuole effettuare la ricerca
Parametro -> v = valore di cui si vuole sapere l'indice nell'array
Return ->  l'indice della prima occorrenza di v oppure null se v non è presente nell'array a
*/
function linearSearch(a, v){
    for(let i = 0; i<a.length; i++){
        if(a[i] == v) {
            console.log("a["+i+"]="+a[i]+"=="+v)
            return i;
        }
        else {
            console.log("a["+i+"]="+a[i]+"!="+v) 
        }
            
    }
    return null;
}


linearSearch([34,67,3,89,100,23,78,34,21,29,86,456,3456,23436,786785645,334,21346,78757], 29)
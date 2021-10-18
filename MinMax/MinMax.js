/*
La seguente funzione trova il valore della mossa migliore usando l'algoritmo di MinMax senza alpha beta pruning
Parametro -> T = L'albero delle mosse contente il valore della mossa ed i figli
Parametro -> depth = Profondita con cui si vuole cercare nell'albero
Parametro ->  maximizingPlayer = Indica se il giocatore corrente cerca la mossa dal valore più alto (true) o più basso (false)
Return ->  il valore della mossa migliore
*/
function MinMax(T, depth, maximizingPlayer) {
    if(depth == 0)
        return T.value;
    let best_Value, v
    if(maximizingPlayer){
        best_Value = Number.NEGATIVE_INFINITY
        for(let i = 0; i<T.childs.length; i++){
            v = MinMax(T.childs[i], depth - 1, false)
            best_Value = Math.max(best_Value, v)
        }
        return best_Value
    }
    else{
        best_Value = Number.POSITIVE_INFINITY
        for(let i = 0; i<T.childs.length; i++){
            v = MinMax(T.childs[i], depth - 1, true)
            best_Value = Math.min(best_Value, v)
        }
        return best_Value
    }
}

let tree = {value:0,
    childs:[
        {value:3,
            childs:[
                {value:10, childs:[
                    {value: 9, childs:[]},
                    {value: 1, childs:[]}
                ]}, 
                {value:2, childs: [
                    {value:-5, childs:[]},
                    {value:-3, childs:[]}
                ]}]
        }, 
        {value:5,
            childs:[
                {value:4, childs:[
                    {value:33, childs:[]},
                    {value:-10, childs:[]}
                ]}, 
                {value:7, childs:[
                    {value:42, childs:[]},
                    {value:30, childs:[]}
                ]}]
        }
    ]
}
console.log(MinMax(tree, 3, true))

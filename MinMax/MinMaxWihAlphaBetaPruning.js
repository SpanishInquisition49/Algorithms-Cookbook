/*
La seguente funzione trova il valore della mossa migliore usando l'algoritmo di MinMax con alpha beta pruning
Parametro -> T = L'albero delle mosse contente il valore della mossa ed i figli
Parametro -> depth = Profondita con cui si vuole cercare nell'albero
Parametro -> alpha = tiene traccia del valore maggiore per eseguire il pruning
Parametro -> beta = tiene traccia del valore minore per eseguire il pruning
Parametro ->  maximizingPlayer = Indica se il giocatore corrente cerca la mossa dal valore più alto (true) o più basso (false)
Return ->  il valore della mossa migliore
*/
function MinMax(T, depth, alpha, beta, maximizingPlayer) {
    if(depth == 0)
        return T.value;
    let best_Value, v
    if(maximizingPlayer){
        best_Value = Number.NEGATIVE_INFINITY
        for(let i = 0; i<T.childs.length; i++){
            v = MinMax(T.childs[i], depth - 1, alpha, beta, false)
            best_Value = Math.max(best_Value, v)
            alpha = Math.max(alpha, v)
            if(beta <= alpha)
                break
        }
        return best_Value
    }
    else{
        best_Value = Number.POSITIVE_INFINITY
        for(let i = 0; i<T.childs.length; i++){
            v = MinMax(T.childs[i], depth - 1, alpha, beta, true)
            best_Value = Math.min(best_Value, v)
            beta = Math.min(beta, v)
            if(beta <= alpha)
                break
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
console.log(MinMax(tree, 3, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, true))

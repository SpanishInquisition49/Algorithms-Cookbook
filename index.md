# Algorithms Cookbook
## Indice dei contenuti
* [Ricerca Binaria](#ricerca-binaria)
* [Alberi k-ari](#alberi-k-ari)
* [Torre Di Hanoi](#torre-di-hanoi)
* [Heap](#heap)
* [Insertion Sort](#insertion-sort)
* [Ricerca Lineare](#ricerca-lineare)
* [Merge Sort](#merge-sort)
* [Algotitmo di MinMax](#minmax-algorithm)
* [Permutazioni](#permutations)
* [Quick Sort](#quick-sort)
* [Selection Sort](#selection-sort)

## Ricerca Binaria 
### Complessità O(log(n))
La ricerca binaria è un algoritmo di ricerca che restituisce l'indice del valore ricercato all'interno di un Array ordinato. L'algoritmo compara il valore _v_ con il valore al centro dell'array. Se _v_ != A[centro], la metà in cui _v_ non può appartenere viene ignorata e la ricerca binaria continua con l'altra metà in maniera ricorsiva finché il valore non viene trovato oppure non è contenuto dall'array.

```javascript
//Implementazione Javascript
function binarySearch(a, v, i = 0, end = a.length-1){
    if(i >= end)
        return a[end] == v ? i : -1
    let half = Math.trunc((i+end)/2)
    if(a[half] == v)
        return half
    if(a[half] > v)
        return binarySearch(a, v, 0, half)
    else 
        return binarySearch(a, v, half +1, end)
}
```

## Alberi K-ari
tree.js contiene alcune delle funzioni comunemente usate su alberi k-ari:

* **Map(t,f)**: Applica una funzione _f_ ad ogni valore dell'albero _T_ passato come argomento.
* **Reduce(t,f)**: Applica una funzione reducer _f_ ad ogni valore dell'albero _T_ e restituisce il valore calcolato da _f_.
* **Max(t)**: Restituisce il valore massimo all'interno di _T_.
* **Min(t)**: Restituisce il valore minimo all'interno di _T_.
* **Search(t,v)**: Restituisce _True_ se _v_ è presente in almeno un nodo di _T_, _False_ altrimenti.
* **PathFromRootToValue(t, v)**: Restituisce un array contente il percorso dalla radice al primo nodo contente _v_ (visitando l'albero da sx a dx).
* **PathFromXtoY(t,x,y)**: Restituisce un array contente il percorso tra i nodi _x_ e _y_ se presenti nell'albero _T_.
* **PrintPath(path)**: Stampa l'array contente un path.

## Torre di Hanoi
La Torre di Hanoi è un puzzle matematico in cui lo scopo è spostare un numero _n_ di dischi da una staffa all'altra usando una terza staffa di appoggio. Il gioco comincia con i dischi posti su una staffa dal più grande (sul fondo) al più piccolo (in cima) e termina quando tutti i dischi vengono spostati sulla staffa di arrivo nello stesso ordine osservando le seguenti regole:
* Si può spostare solo un disco alla volta.
* Non si può pizzare un disco più grande sopra uno più piccolo.
* Ogni mossa consiste nello spostare un disco da una staffa all'altra.
Con 3 dischi si può risolvere il gioco in 7 mosse. Il numero minimo di mosse è 2^_n_ - 1 dove _n_ è il numero di dischi. 

## Heap
Lo Heap logicamente è un albero che possiede due proprità:
* Deve essere un albero "quasi completo" e tutte le foglie devono essere a sinistra (non devono esserci buchi tra le foglie)
* In un Max Heap ogni nodo _C_ deve avere valore minore od uguale rispetto al nodo _Padre_. Il nodo senza genitori è chiamato radice.

Heap.js contiene alcune delle funzioni comunemente usate su Heap:
 * **father(i)**: Restituisce l'indice del nodo _Padre_ di _i_.
 * **childs(i)**: Restituisce un oggetto {sx:i, dx:j} contenente gli indici di entrambi i figli.
 * **Heap(a)**: Crea e Restituisce un Heap a partire dall'array _a_.
 * **maxHeapify(h)**: Mantiene la proprietà di Max Heap valida.
 * **reheapificationUpward(v, h)**: Aggiunge un valore _v_ allo Heap mantenendo valide le proprità di uno Heap.
 * **reheapificationDownward(h, i)**: Rimuove il nodo in posizione _i_ (Default 0) dallo Heap _h_ mantenendo le proprietà di uno Heap.
 * **heapSort(h, decreasing)**: Restituisce un Array ordinato in modo crescente o decrescende a seconda del parametro _decreasing_. Effetti Collaterali: la funzione consuma l'array _h_. (Dopo l'esecuzione _h_ = [])
 * **isHeap(h)**: Restituisce _True_ se sono verificate le proprità di uno Heap su _h_, _False_ altrimenti.

## Insertion Sort 
### Complessità O(n^2)
L'algoritmo solitamente ordina la sequenza sul posto. Si assume che la sequenza da ordinare sia partizionata in una sottosequenza già ordinata, all'inizio composta da un solo elemento, e una ancora da ordinare.

```javascript
//Javascript Implementation
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
```

### Correttezza dell'Insertion Sort
at the start of each iteration of the for loop, wich is indexed by j, the subarray A' [0..j-1] is sorted, and the remaining subarray A'' [j+1..n-1] is not sorted.
#### Loop invariant:
at the start of each iteration of the for loop the subarray A' [0..j-1] consists of the elements originally in A [0..j-1], but in sorted order.
#### Initialization:
Quando j = 1 (prima iterazione) il subarray A' [0..1] è formato solo dall'elemento A[0] ed è quindi ordinato.
#### Maintenance:
Informalmente , il corpo del for loop sposta gli elementi A[j-1], A[j-2], A[j-3], etc... di una posizione verso destra fino a che non viene trovata la corretta posizione per A[j].
Il subarray A' [0..j] è formato dagli elementi originariamente in A[0..j], ma ordinati. Incrementando _j_ per the la prossima iterazione del loop preserva quindi il loop invariant.
#### Termination:
La condizionew che causa la fine del for loop è: j > a.length (n-1). Dato che ad ogni iterazione del loop j viene incrementato di 1, avremo che j = n.
Sostituendo j con n nel loop invariant otteniamo: il subarray A' [0..n-1] consisnte negli elementi di A [0..n-1], ma ordinati.
Osserviamo che A' [0..n-1] è l'intero array e possiamo quindi concludere che l'array è ordinato e che l'algoritmo è corretto.

## Ricerca Lineare 
### Complessità O(n)
La ricerca lineare controlla in sequenza ogni elemento dell'array fino alla prima occorrenza dell'elemento _v_. Se l'algoritmo raggiunge la fine dell'array senza aver trovato un occorrenza ritorna _Nil_ per indicare che l'elemento non è presente in A.

```javascript
//Javascript Implementation
function linearSearch(a, v){
    for(let i = 0; i<a.length; i++){
        if(a[i] == v)
            return i;
    }
    return null;
}
```

### Correttezza della ricerca lineare
#### Loop Invariant:
Per ogni indice *k* nel subarray A' [0..i) => A'[k] != *v*
Informalmente: il subarray A' [0..i) non contiene l'elemento *v*
#### Intialization:
*i* = 0 => A'[0..0) => ⍉ => per ogni indice *k* vale che: A'[k] != *v* ed è vero perché l'array vuoto non contiene elementi
#### Maintenance:
per ogni indice *k* nel subarray A' [0..i) vale che A'[k] != *v* e A[i] != *v* <==> per ogni indice *k* nel subarray A'[0..i+1) vale che A'[k] != *v*
#### Termination:
Il loop può terminare per due ragioni:
* Return *i* se A[i] == *v*
* *i* = A.length (ultima iterazione del loop), il loop invariant è:
per ogni indice *k* nel subarray A' [0..A.length) vale che A[k] != *v*, ma il subarray A'[0..A.length) è l'intero array A, quindi il valore *v* non è presente nell'array e viene ritornato _Nil_.   

## Merge Sort 
### Complexity 𝚯(nlog(n))
Il Merge sort è un algoritmo di tipo _divide et impera_ in cui:
* Divide: l'array A in n subarray, ognuno contente un elemento (l'array di un elemento solo è considerato ordinato)
* Impera: viene fatto il merge di due subarray _ordinati_ ritornando un solo array ordinato di lunghezza A'.length + A''.length
viene ripetuto il merge fino a che non riotteniamo un solo array ordinato.

```javascript
//Javascript Implementation
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
```

## MinMax Algorithm
Il minimax, nella teoria delle decisioni, è un metodo per minimizzare la massima (minimax) perdita possibile; in alternativa, per massimizzare il minimo guadagno (maximin). Fu scoperto nella teoria dei giochi in caso di gioco a somma zero con due giocatori.

## Permutations
Permutations.js contiene alcune funzioni functions che fanno uso di permutazioni o generano permutazioni:
* **isPermutation(firstString, secondString)**: Return true se _secondString_ è una permutazione di _firstString_, false altrimenti.
* **findPermutations(s)**: Return an array containing all possible permutations of the string s.
* **isVampire(n)**: Return true se il numero _n_ è un "[Numero del Vampiro](https://en.wikipedia.org/wiki/Vampire_number)", false altriemti.

## Quick Sort
### Complessità nel caso medio: 𝚯(nlog(n)), nel caso pessimo: 𝚯(n^2)
il Quick Sort è un algoritmo _divide et impera_. 
Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting.

Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined. Efficient implementations of Quicksort are not a stable sort, meaning that the relative order of equal sort items is not preserved.

```javascript
//Javascript Implementation
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)]
    i = left
    j = right
    while (i <= j) {
        while (items[i] < pivot) {
            i++
        }
        while (items[j] > pivot) {
            j--
        }
        if (i <= j) {
            misc.swapInsideArray(items, i, j) //Swap the elements of the given indexes 
            i++
            j--
        }
    }
    return i;
}

function quickSort(items, left = 0, right = items.length - 1) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
```

## Selection Sort 
### Complexity O(n^2)
Selection sort divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

```javascript
//Javascript Implementation
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

function min(array,index){
  let min=index;
  for(let i=index+1; i<array.length; i++){
    if(array[i]<array[min]) 
      min = i;
  }
  return min;
}
```

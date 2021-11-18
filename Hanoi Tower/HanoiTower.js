//La seguente classe associa un nome ad un array
class Pile {
    name
    array
    
    constructor(name, n){
        this.name = name
        this.array = new Array()
        let i = n
        for(let i = n; i > 0; i--){
            this.array.push(i)
        }
    }

    push(el) {
        this.array.push(el)
    }

    pop() {
        return this.array.pop()
    }

    print() {
        console.log(this.name + "[" + this.array + "]")
    }
}

/*
La seguente funzione stampa le pile nell'ordine partenza, ausiliare, destinazione
Parametro -> a = pila
Parametro -> b = pila
Parametro -> c = pila
*/
function printInOrder(a,b,c) {
    let arr = [a,b,c]
    arr.sort((a,b) => {
        return a.name < b.name ? -1 : 1
    })

    for(el of arr)
        el.print()
}

/*
La seguente funzione ricorsiva risolve il gioco della torre di hanoi
Parametro -> n = numero di dischi
Parametro -> a = pila iniziale
Parametro -> b = pila ausiliare
Parametro -> c = pila di destinazione
*/
function hanoi(n, a, b, c, verbose = false) {
    if(n == 1){
        c.push(a.pop())
        if(verbose){
            console.log("=======================")
            printInOrder(a,b,c)
        }
    }
    else {
        hanoi(n-1, a,c,b)
        c.push(a.pop())
        if(verbose){
            console.log("=======================")
            printInOrder(a,b,c)
        }
        hanoi(n-1, b, a, c)
    }
}

//Torre di Hanoi
//cambiare n a piacimento per aumentare il numero di dischi
let n = 7
let a = new Pile("A", n)
let b = new Pile("B", 0)
let c = new Pile("C", 0)
printInOrder(a,b,c)
hanoi(a.array.length, a, b, c)
console.log("=======================")
printInOrder(a,b,c)

module.exports = {
    hanoi,
    printInOrder
}
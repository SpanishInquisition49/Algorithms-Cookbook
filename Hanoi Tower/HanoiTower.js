//Torre di Hanoi
//cambiare k a piacimento per aumentare il numero di dischi
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

function printInOrder(a,b,c) {
    let arr = [a,b,c]
    arr.sort((a,b) => {
        return a.name < b.name ? -1 : 1
    })

    for(el of arr)
        el.print()
}

function hanoi(n, a, b, c) {
    if(n == 1){
        c.push(a.pop())
        console.log("=======================")
        printInOrder(a,b,c)
    }
    else {
        hanoi(n-1, a,c,b)
        c.push(a.pop())
        console.log("=======================")
        printInOrder(a,b,c)
        hanoi(n-1, b, a, c)
    }
}

let n = 7 // Numero di dischi
let a = new Pile("A", k)
let b = new Pile("B", 0)
let c = new Pile("C", 0)
printInOrder(a,b,c)
hanoi(a.array.length, a, b, c)
console.log("=======================")
printInOrder(a,b,c)
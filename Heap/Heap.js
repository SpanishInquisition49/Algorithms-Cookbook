class Heap {
    heap = [];
    
    static father = (i) => {
        return Math.ceil(i/2) -1;
    }

    static childs = (i) => {
        return {sx:2*i+1, dx:2*(i+1)};
    }

    static swap = (h, a, b) => {
        let tmp = h[a];
        h[a] = h[b]
        h[b] = tmp
    }

    constructor(a){
        console.log(a)
        let len = Math.floor(a.length)
        for(let i = len; i>= 0; i--)
            this.maxHeapify(a,i,len)
        this.heap = a;
    }

    maxHeapify(h = this.heap, i = Math.floor(this.heap.length/2), n = this.heap.length-1){
        let childs = Heap.childs(i)
        let max = childs.sx <= n && h[childs.sx] > h[i] ? childs.sx : i
        max = childs.dx <= n && h[childs.dx] > h[max] ? childs.dx : max
        if(max != i){
            Heap.swap(h, i, max)
            this.maxHeapify(h, max, n)
        }
    }

    reheapificationUpward(v, h = this.heap){
        h.push(v)
        let len = Math.floor(h.length)
        for(let i = len; i>= 0; i--)
            this.maxHeapify(h,i,len)

    }

    reheapificationDownward(h = this.heap){
        Heap.swap(h, 0, h.length-1)
        h.pop()
        let len = Math.floor(h.length)
        for(let i = len; i>= 0; i--)
            this.maxHeapify(h,i,len)
    }

    heapSort(h = [...this.heap], decreasing = false){
        let res = []
        while(h.length != 0){
            res.push(h[0])
            this.reheapificationDownward(h)
        }
        return decreasing ? res : res.reverse()
    }

    isHeap(h = this.heap){
        for(let i = 0; i<Math.floor(h.length/2); i++){
            let c = Heap.childs(i);
            if(h[i] < h[c.sx] || h[i] < h[c.dx])
                return false
        }
        return true
    }

    static isHeap(h){
        for(let i = 0; i<Math.floor(h.length/2); i++){
            let c = Heap.childs(i);
            if(h[i] < h[c.sx] || h[i] < h[c.dx])
                return false
        }
        return true
    }

    print(h = this.heap){
        console.log("Heap: " + h);
    }
}

let a = [0,45,77,89,23,55,12,20,1,34,6,7,80]
console.log(a + " isHeap:" + Heap.isHeap(a))
let heap = new Heap(a)
console.log("Heap:" + heap.heap)
console.log(heap.isHeap())
console.log(heap.heapSort())

heap.reheapificationUpward(234)
heap.print()
console.log(heap.isHeap())


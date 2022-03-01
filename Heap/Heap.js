const { PathSegment } = require("../Fun with trees/tree");

class Heap {

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
        let len = Math.floor(a.length)
        for(let i = len; i>= 0; i--)
            Heap.maxHeapify(a,i,len)
        return a
    }

    static buildMaxHeap(a){
        let len = Math.floor(a.length)
        for(let i = len; i>= 0; i--)
            Heap.maxHeapify(a,i,len)
        return a
    }

    static maxHeapify(h, i = Math.floor(h/2), n = h.length-1){
        let childs = Heap.childs(i)
        let max = childs.sx <= n && h[childs.sx] > h[i] ? childs.sx : i
        max = childs.dx <= n && h[childs.dx] > h[max] ? childs.dx : max
        if(max != i){
            Heap.swap(h, i, max)
            Heap.maxHeapify(h, max, n)
        }
    }

    static reheapificationDownward(h, index = 0){
        Heap.swap(h, index, h.length-1)
        h.pop()
        let len = Math.floor(h.length)
        for(let i = len; i>= 0; i--)
            Heap.maxHeapify(h,i,len)
    }

    static reheapificationUpward(v, h){
        h.push(v)
        let len = Math.floor(h.length)
        for(let i = len; i>= 0; i--)
            this.maxHeapify(h,i,len)

    }

    static heapSort(a, decreasing = false){
        let res = []
        if(!Heap.isHeap(a))
            Heap.buildMaxHeap(a)
        while(a.length != 0){
            res.push(a[0])
            Heap.reheapificationDownward(a)
        }
        return decreasing ? res : res.reverse()
    }

    static isHeap(h){
        for(let i = 0; i<Math.floor(h.length/2); i++){
            let c = Heap.childs(i)
            if(h[i] < h[c.sx] || h[i] < h[c.dx])
                return false
        }
        return true
    }

    static merge(h1, h2){
        let tmpArr = [...h1.heap]
        let res = new Heap(tmpArr)
        for(let i = 0; i<h2.heap.length; i++)
            res.reheapificationUpward(h2.heap[i])
        return res;
    }

    static meld(h1, h2){
        for(let i = 0; i<h2.heap.length; i++)
            Heap.reheapificationUpward(h2[i], h1)
    }

    static map(h, f){
        h = h.map(f)
        if(!Heap.isHeap(h)){
            let len = Math.floor(h.length)
            for(let i = len; i>= 0; i--)
                this.maxHeapify(h,i,len)
        }
    }

    static reduce(h, f){
        return h.reduce(f)
    }

    static max(h){
        return h.length >=0 ? h[0] : undefined
    }

    static min(h){
        let min = Number.POSITIVE_INFINITY
        for(let i = Math.floor(h.length/2); i<h.length; i++)
            min = h[i] < min ? h[i] : min
        return min
    }

    static print(h){
        console.log("Heap: " + h)
    }

    /*
    pathFromRootToX(x, index = 0, path = []){
        if(index > this.heap.length || this.heap[index] < x)
            return undefined
        let c = Heap.childs(index)
        path.push(new PathSegment(index, this.heap[index]))
        if(this.heap[index] == x){
            return path
        }
        else if(this.pathFromRootToX(x, c.sx, path) == undefined){
            //path.pop()
            this.pathFromRootToX(x,c.dx, path)
        }
        return path
    }

    pathFromXtoY(x,y){
        let path = []
        let px = this.pathFromRootToX(x)
        console.log("Path from root to " +x+ " :" + Heap.printPath(px))
        let py = this.pathFromRootToX(y)
        console.log("Path from root to " +y+ " :" + Heap.printPath(py))
        if(px == undefined || py == undefined)
        return path
        let node = {}
        for(let i = 0; i<px.length; i++){
            if(i<py.length && px[i].nodeIndex == py[i].nodeIndex && px[i].value == py[i].value){
                node.value = px[i].nodeIndex
                node.depth = i
            }
            else
                break
        }
        //console.log("devo fare lo splice da 0 a " + node.depth)
        px.splice(0, node.depth)
        px = px.reverse()
        py.splice(0, node.depth+1)
        path = [...px,...py]
        return path
    }

    static printPath(path){
        let res = ""
        console.log(path)
        if(path == undefined)
            return res
        for(let index = 0; index < path.length; index++)
            res += path[index].value + "->"
        res = res.substr(0, res.length-2)
        return res
    }
}*/
}

module.exports = {
    Heap
}

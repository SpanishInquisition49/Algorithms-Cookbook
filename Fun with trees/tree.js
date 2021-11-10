class Tree {
    constructor(depth, numberOfChilds, isEmpty){
        return this.randomTree(depth, numberOfChilds, isEmpty)
    }

    randomTree(depth, numberOfChilds, isEmpty){
        if(depth == 0)
            return {value:isEmpty ? null : getRandomInt(100), childs:undefined}
        let res = {value:isEmpty ? null : getRandomInt(100), childs:[]}
        for(let i = 0; i<numberOfChilds; i++)
            res.childs.push(this.randomTree(depth-1, numberOfChilds))
        return res
    }

    static map(t, f){
        t.value = f(t.value)
        if(t.childs != undefined)
            for(let c of t.childs)
                this.map(c, f)
    }

    static reduce(t, f){
        let res = f(t.value)
        if(t.childs != undefined)
            for(let c in t.childs)
                res += this.reduce(t.childs[c], f)
        return res
    }

    static max(t){
        if(t == undefined) 
            return -Infinity
        let max = t.value
        if(t.childs != undefined)
            for(let c of t.childs)
                max = Math.max(max, this.max(c))
        return max
    }

    static min(t){
        if(t == undefined) 
            return Infinity
        let min = t.value
        if(t.childs != undefined)
            for(let c of t.childs)
                min = Math.min(min, this.min(c))
        return min
    }

    static search(t, v){
        if(t == undefined)
            return false
        if(t.value == v)
            return true
        if(t.childs != undefined)
            for(c of t.childs)
                if(this.search(c, v))
                    return true
        return false
    }

    static pathFromRootToValue(t, v, path = ["Root"]){
        if(t.childs == undefined)
            return t.value == v ? path : t.value
        if(t.value == v)
            return path
        for(let i = 0; i<t.childs.length; i++){
            path.push(i)
            let res = this.pathFromRootToValue(t.childs[i], v, path)
            if(typeof res == "number")
                path.pop()
            else
                return path
        }
        return -1;
    }

    static printPath(t, path, index = 0){
        if(index == path.length)
            return path.length
        console.log(t.value)
        if(t.childs != undefined)
            this.printPath(t.childs[path[index+1]], path, index+1)
        return path.length
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let tree = new Tree(20, 2, false)
console.log(tree)
//console.log(Tree.reduce(tree, (x) => {return x}))
Tree.map(tree, (x) => {return x*2})
console.log(tree)
console.log("Sum:" + Tree.reduce(tree, (x) => {return x}))
let max = Tree.max(tree)
console.log("Max:" + max)
console.log("Min:" + Tree.min(tree))
console.log("Search:" + Tree.search(max))
let p = Tree.pathFromRootToValue(tree, max)
console.log(p)
console.log(Tree.printPath(tree, p))
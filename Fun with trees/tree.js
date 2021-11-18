const { getRandomInt } = require("../_Miscellaneous/misc")

class PathSegment {
    constructor(nodeIndex, v){
        return {path:nodeIndex, value:v}
    }
}

class Tree {
    constructor(depth, numberOfChilds, isEmpty){
        return this.randomTree(depth, numberOfChilds, isEmpty)
    }

    randomTree(depth, numberOfChilds, isEmpty){
        if(depth == 0)
            return {value:isEmpty ? null : getRandomInt(1000), childs:undefined}
        let res = {value:isEmpty ? null : getRandomInt(1000), childs:[]}
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

    static pathFromRootToValue(t, v, path = [new PathSegment("Root", t.value)]){
        if(t.childs == undefined)
            return t.value == v ? path : t.value
        if(t.value == v)
            return path
        for(let i = 0; i<t.childs.length; i++){
            path.push(new PathSegment(i, t.childs[i].value))
            let res = this.pathFromRootToValue(t.childs[i], v, path)
            if(typeof res == "number")
                path.pop()
            else
                return path
        }
        return -1;
    }


    static pathValuesFromRootToValue(t, v, path = [t.value]){
        if(t.childs == undefined)
            return t.value == v ? path : t.value
        if(t.value == v)
            return path
        for(let i = 0; i<t.childs.length; i++){
            path.push(t.childs[i].value)
            let res = this.pathFromRootToValue(t.childs[i], v, path)
            if(typeof res == "number")
                path.pop()
            else
                return path
        }
        return -1;
    }

    static pathFromXtoY(t, x, y){
        let path = []
        let px = this.pathFromRootToValue(t, x)
        console.log(`Path from Root to ${x}: ${this.printPath(px)}`)
        let py = this.pathFromRootToValue(t, y)
        console.log(`Path from Root to ${y}: ${this.printPath(py)}`)
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
}

module.exports = {
    Tree,
    PathSegment
}
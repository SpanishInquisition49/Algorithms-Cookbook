module.exports = {
    swapInsideArray: (a, i, j) => {
        let tmp = a[i]
        a[i] = a[j]
        a[j] = tmp
    },

    isSorted: (a) => {
        for(let i = 0; i<a.length-1;i++)
            if(a[i] > a[i+1])
                return false
        return true
    },

    maxValue: (a) => {
        let max = a[0]
        for(let i = 1; i<a.length; i++)
            max = a[i] > max ? a[i] : max
        return max;
    },

    minValue: (a) => {
        let min = a[0]
        for(let i = 1; i<a.length; i++)
            min = a[i] < min ? a[i] : min
        return min;
    },

    getRandomInt: (max) => {
        return Math.floor(Math.random() * max);
    },
    
    randomArray: (n, m) => {
        let res = []
        for(let i = 0; i<n;i++)
            res.push(module.exports.getRandomInt(m))
        return res;
    },

    randomValueInsideArray: (a) => {
        return a[module.exports.getRandomInt(a.length)]
    },

    runSort: (n, f, m = n, verbose = false) => {
        let arr = module.exports.randomArray(n, m)
        if(verbose)
            console.log(arr)
        var startDate = new Date();
        f(arr)
        var endDate   = new Date();
        if(verbose)
            console.log(arr)
        var ms = (endDate.getTime() - startDate.getTime());
        if(module.exports.isSorted(arr)){
            console.log(`Sorted ${n} elements in ~${ms}ms`)
            return ms
        }
        else
            console.log("Sort Failed")
        return -1

    },

    runNotInPlaceSort: (n, f, m = n, verbose = false) => {
        let arr = module.exports.randomArray(n, m)
        if(verbose)
            console.log(arr)
        var startDate = new Date();
        arr = f(arr)
        var endDate   = new Date();
        if(verbose)
            console.log(arr)
        var ms = (endDate.getTime() - startDate.getTime());
        if(module.exports.isSorted(arr)){
            console.log(`Sorted ${n} elements in ~${ms}ms`)
            return ms
        }
        else
            console.log("Sort Failed")
        return -1
    },

    runSearch: (a, k, f) => {
        var startDate = new Date();
        let found = f(a, k)
        var endDate   = new Date();
        var ms = (endDate.getTime() - startDate.getTime());
        console.log(`Searched for key:${k} inside ${a.length} elements in ~${ms} ms | key was ${found ? "found in index:" + found : "not found"}`)
        return ms

    },

    runFunction: (name, f) => {
        var startDate = new Date();
        let found = f(a, k)
        var endDate   = new Date();
        var ms = (endDate.getTime() - startDate.getTime());
        console.log(`Executed ${name} in ${ms}ms`)
        return ms
    }
}
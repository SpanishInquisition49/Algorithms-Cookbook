var misc = require("../_Miscellaneous/misc.js")
var insSort = require("../Insertion Sort/InsertionSort.js")

function bucketSort(a){
    let n = Math.ceil(misc.maxValue(a)/10)
    let f = (x) => {
        return Math.ceil(x/10)
    }
    let buckets = []
    for(let i = 0; i<n; i++)
        buckets.push([])
    for(let i = 0; i<a.length; i++){
        if(buckets[f(a[i])] == undefined)
            buckets[f(a[i])] = []
        buckets[f(a[i])].push(a[i])
    }
    let i = 0;
    for(bucket of buckets){
        insSort.insertionSort(bucket)
        for(x of bucket){
            a[i] = x
            i++
        }
    }
}

module.exports = {
    bucketSort
}
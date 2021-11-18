const { getRandomInt, swapInsideArray, isSorted } = require("../_Miscellaneous/misc")

function bogoSort(a){
    let sorted = false
    while(!sorted){
        let i = getRandomInt(a.length)
        let j = getRandomInt(a.length)
        swapInsideArray(a,i,j)
        sorted = isSorted(a)
    }
}

module.exports = {
    bogoSort
}
var misc = require("../_Miscellaneous/misc.js")

function pidgeonHoleSort(a){
    let max = misc.maxValue(a)
    let min = misc.minValue(a)
    let holes = []
    for(let i = 0; i<max - min; i++)
        holes.push([])

    for(let i = 0; i<a.length;i++){
        if(holes[a[i]- min] == undefined)
            holes[a[i] - min] = []
        holes[a[i] - min].push(a[i])
    }
    let i = 0;
    for(hole of holes)
        for(x of hole){
            a[i] = x
            i++
        }
}

module.exports = {
    pidgeonHoleSort
}
import {maxValue, minValue} from "../_Miscellaneous/misc.js"

function countingSort(a: number[]): void{
    let max = maxValue(a)
    let min = minValue(a)
    let counter = []
    for(let i = 0; i<=max-min; i++)
        counter.push(0)
    for(let i = 0; i<a.length; i++)
        counter[a[i]-min]+=1
    let index = 0
    for(let countIndex = 0; countIndex<counter.length; countIndex++)
        for(let i = 0; i<counter[countIndex]; i++){
            a[index] = countIndex+min
            index++
        }
}
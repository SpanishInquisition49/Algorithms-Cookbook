import { maxValue } from "../_Miscellaneous/misc.js"
import {insertionSort} from "../Insertion Sort/InsertionSort.js"

export function bucketSort(a: number[]): void{
    let n = Math.ceil(maxValue(a)/10)
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
    for(let bucket of buckets){
        insertionSort(bucket)
        for(let x of bucket){
            a[i] = x
            i++
        }
    }
}
import misc = require("../_Miscellaneous/misc");
import qckSort = require("../Quick Sort/QuickSort.js")

export function binarySearch<T>(a: T[], key: T, i: number = 0, end:number = a.length-1): number {
    if(i >= end)
    return a[end] == key ? i : -1
    let half = Math.floor((i+end)/2)
    if(a[half] == key)
        return half
    if(a[half] > key)
        return binarySearch(a, key, 0, half)
    else 
        return binarySearch(a, key, half +1, end)
}


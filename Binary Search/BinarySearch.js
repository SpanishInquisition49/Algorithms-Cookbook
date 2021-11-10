function binarySearch(a, v, i, end){
    if(i >= end)
        return a[end] == v ? i : -1
    let half = Math.trunc((i+end)/2)
    if(a[half] == v)
        return half
    if(a[half] > v)
        return binarySearch(a, v, 0, half)
    else 
        return binarySearch(a, v, half +1, end)
}

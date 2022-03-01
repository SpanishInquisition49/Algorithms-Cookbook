export function mergeSort<T>(array: T[]): T[] {
    const half = Math.floor(array.length / 2)
    if(array.length < 2)
      return array 
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}

export function merge<T>(left: T[], right: T[]): T[] {
    let arr: T[] = []
    while (left.length && right.length) {
        if (left[0] < right[0])
            arr.push(left.shift())  
        else
            arr.push(right.shift()) 
    }
    return [ ...arr, ...left, ...right ]
}
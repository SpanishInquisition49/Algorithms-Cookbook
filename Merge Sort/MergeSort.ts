export function mergeSort<τ>(array: τ[]): τ[] {
    const half = Math.floor(array.length / 2)
    if(array.length < 2)
      return array 
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}

export function merge<τ>(left: τ[], right: τ[]): τ[] {
    let arr: τ[] = []
    while (left.length && right.length) {
        if (left[0] < right[0])
            arr.push(left.shift())  
        else
            arr.push(right.shift()) 
    }
    return [ ...arr, ...left, ...right ]
}
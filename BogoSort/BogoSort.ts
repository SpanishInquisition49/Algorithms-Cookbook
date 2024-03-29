import { getRandomInt, swapInsideArray, isSorted } from "../_Miscellaneous/misc"

export function bogoSort<τ>(a: τ[]): void{
    let sorted = false
    while(!sorted){
        let i = getRandomInt(a.length)
        let j = getRandomInt(a.length)
        swapInsideArray(a,i,j)
        sorted = isSorted(a)
    }
}
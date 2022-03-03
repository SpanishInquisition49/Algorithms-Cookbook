import { maxValue, minValue } from "../_Miscellaneous/misc"

export function pidgeonHoleSort(a: number[]): void{
    let max = maxValue(a)
    let min = minValue(a)
    let holes = []
    for(let i = 0; i<max - min; i++)
        holes.push([])

    for(let i = 0; i<a.length;i++){
        if(holes[a[i]- min] == undefined)
            holes[a[i] - min] = []
        holes[a[i] - min].push(a[i])
    }
    let i = 0;
    for(let hole of holes)
        for(let x of hole){
            a[i] = x
            i++
        }
}
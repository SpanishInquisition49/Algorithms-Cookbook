import { swapInsideArray } from "../_Miscellaneous/misc";

export function partition(items: number[], left: number, right: number) {
    var pivot = items[Math.floor((right + left) / 2)]
    let i = left
    let j = right
    while (i <= j) {
        while (items[i] < pivot) {
            i++
        }
        while (items[j] > pivot) {
            j--
        }
        if (i <= j) {
            swapInsideArray(items, i, j)
            i++
            j--
        }
    }
    return i;
}

export function quickSort(items: number[], left = 0, right = items.length - 1) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
import misc = require("../_Miscellaneous/misc");

export function insertionSort<T>(a: T[]): void{
    for(let j = 1; j<a.length; j++){
        let key = a[j];
        let i = j-1;
        while(i>=0 && a[i] > key){
            a[i+1] = a[i]
            i--;
        }
        a[i+1] = key;
    }
}
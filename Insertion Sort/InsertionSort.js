function insertionSortNonDecreasing(a){
    for(let j = 1; j<a.length; j++){
        let key = a[j];
        let i = j-1;
        while(i>=0 && a[i] > key){
            a[i+1] = a[i]
            console.log(a);
            i--;
        }
        a[i+1] = key;
        console.log(a);
    }
}

let a = [5,2,4,6,1,3,9,7,8,11,10,12]
insertionSortNonDecreasing(a)
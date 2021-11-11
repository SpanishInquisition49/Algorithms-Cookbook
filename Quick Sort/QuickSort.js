function quickSort(a, left = 0, right = a.length -1){
      if(left < right){
          const q = partition(a, left, right)
          quickSort(a, left, q)
          quickSort(a, q+1, right)
      }
}

function partition(a, left, right){
      const pivotIndex = Math.floor(Math.random() * (right - left + 1) + left)
      swap(a, pivotIndex, right-1)
      let i = left-1
      for(let j = left; j<=right; j++){
          if(a[j]<= a[right-1]){
              i++
              swap(a,i,j)
          }
      }
      return i
}

function swap (arr, left, right) {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}

let a = [5,7,8,9,2,4,6,11,66,45,99,0,123]
console.log(a)
quickSort(a)
console.log(a)
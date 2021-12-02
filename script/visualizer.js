const canvas = document.querySelector("canvas");
var sortingAlgorithm = location.search.split('Sort=')[1];
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");
const ACTIONS = {
  SORT: "SORT",
  COMPARE: "COMPARE",
  SWAP: "SWAP",
  ASSIGNMENT: "ASSIGNMENT",
  SELECTEDINDEX: "SELECTEDINDEX",
  RELOADPAGE: "RELOADPAGE",
};

const getSorting = () => {
  switch(sortingAlgorithm){
    case "mergesort":
      return mergeSort
    case "insertionsort":
      return insertionSort
    case "quicksort":
      return quickSort
    case "bubblesort":
      return bubbleSort
    case "selectionsort":
      return selectionSort
    case "countingsort":
      return countingSort
    case "radixsort":
      return radixSort
    case "cocktailsort":
      return cocktailSort
  }
}

const SORTALGORITHMS = {
  MERGESORT: "mergesort",
}

const ELEMENTS = 100;
const SPEED = 10;
const SLEEPINTERVAL_MS = 2000;
const green = "#00A878";
const conforntColor = "#246EB9"
const swapColor = "#FF6663";
const assignmentColor = "#FFD166";
const arrayColor = "#B1A9B1";
var selectedIndex = -1;

const actionsMap = {
  [ACTIONS.SORT]: (action, members) => members[action.data].sorted(),
  [ACTIONS.SWAP]: (action, members) => {
    const [i, j] = action.data;
    let tmp = members[i].getValue();
    members[i].setValue(members[j].getValue(), swapColor);
    members[j].setValue(tmp, assignmentColor);
  },
  [ACTIONS.COMPARE]: (action, members) => {
    const [i, j] = action.data;
    members[i].setColor(conforntColor);
    members[j].setColor(conforntColor);
  },
  [ACTIONS.ASSIGNMENT]: (action, members) => {
    const [i, j] = action.data;
    members[i].setValue(getProportionalHeigth(j, ELEMENTS), assignmentColor);
  },
  [ACTIONS.SELECTEDINDEX]: (action, members) => {
    const [newI, oldI] = action.data;
    members[newI].setColor(swapColor);
    members[oldI].setColor(arrayColor);
    selectedIndex = newI;
  },
  [ACTIONS.RELOADPAGE]: (action, members) => {
    setTimeout(function(){
      location.reload();
    }, SLEEPINTERVAL_MS);  
  }
};

const getProportionalHeigth =  (v) => {
    return canvas.height/(ELEMENTS/v)
  }

const getProportionalWidth = () => {
    return (canvas.width)/(ELEMENTS)
  }

const shuffledArrayInRange = (bottom = 1, top = ELEMENTS) => {
  const arr = [];
  for (let i = bottom; i < top; i++) arr.push(i);
  return arr.sort((a, b) => (Math.random() > 0.5 ? 1 : -1));
};

const markSorted = (a, onAction) => {
    for(i = 0; i<a.length; i++)
        onAction({type:ACTIONS.SORT, data: i});
    onAction({type:ACTIONS.RELOADPAGE, data: null});
}

const bubbleSort = (array, onAction) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      onAction({ type: ACTIONS.COMPARE, data: [j, j + 1] });
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        onAction({ type: ACTIONS.SWAP, data: [j, j + 1] });
      }
    }
  }
  return array;
};

const cocktailSort = (arr, onAction) => {
	let start = 0, end = arr.length, swapped = true;

	while (swapped) {
		swapped = false;
		for (let i = start; i < end - 1; i++) {
      onAction({type:ACTIONS.COMPARE, data:[i,i+1]});
			if (arr[i] > arr[i+1]) {
				swapped = true;
				let temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
        onAction({type:ACTIONS.SWAP, data:[i,i+1]});
			}
		}

		end--;
		if (!swapped)
			break;
    
		swapped = false;
		for (let i = end - 1; i > start; i--) {
      onAction({type:ACTIONS.COMPARE, data:[i-1,i]});
			if (arr[i - 1] > arr[i]) {
				swapped = true;
				let temp = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = temp;
        onAction({type:ACTIONS.SWAP, data:[i-1,i]});
			}
		}

		start++;
	}

	return arr;
}

const selectionSort = (a, onAction) => {
    for(let i = 0; i<a.length; i++){
        let minIndex = i
        for(let j = i+1; j<a.length; j++){
            if(a[minIndex] > a[j]){
              onAction({type:ACTIONS.SELECTEDINDEX, data: [j, minIndex]});
              minIndex = j
            }
            minIndex = a[minIndex] < a[j] ? minIndex : j
            onAction({type:ACTIONS.COMPARE, data:[i,j]})
        }
        let tmp = a[i]
        a[i] = a[minIndex]
        a[minIndex] = tmp
        onAction({type:ACTIONS.SWAP, data:[i, minIndex]})
    }
}

const insertionSort = (a, onAction) => {
    for(let j = 1; j<a.length; j++){
        let key = a[j];
        let i = j-1;
        while(i>=0 && a[i] > key){
            onAction({type: ACTIONS.COMPARE, data: [i, j]})
            a[i+1] = a[i]
            onAction({type: ACTIONS.ASSIGNMENT, data: [i+1, a[i]]})
            i--;
        }
        a[i+1] = key;
        onAction({type: ACTIONS.ASSIGNMENT, data: [i+1, key]})
    }
}

//Javascript Implementation
const partition = (items, left, right, onAction) => {
    var pivot = items[Math.floor((right + left) / 2)]
    i = left
    j = right
    while (i <= j) {
        while (items[i] < pivot) {
            i++
        }
        while (items[j] > pivot) {
            j--
        }
        if (i <= j) {
            let tmp = items[i]
            items[i] = items[j]
            items[j] = tmp
            onAction({type: ACTIONS.SWAP, data: [i, j]})
            i++
            j--
        }
    }
    return i;
}

const quickSort = (items, onAction,left = 0, right = items.length - 1) => {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right, onAction); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, onAction,left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, onAction,index, right);
        }
    }
    return items;
}

const bogoSort = (items, onAction) => {
    let isSorted = false;
    while(!isSorted){
        let i = Math.floor(Math.random() * items.length);
        let j = Math.floor(Math.random() * items.length);
        let tmp = items[i];
        items[i] = items[j]
        items[j] = tmp
        onAction({type: ACTIONS.SWAP, data: [i,j]})
        isSorted = true
        for(let i=0; i<items.length-1 && isSorted; i++)
            if(items[i+1]<items[i])
                isSorted =false;
    }
}

const countSort = (arr, size, place, onAction) => {
  
  let output = new Array(size + 1).fill(0);
  let max = Math.max(...arr);
  
  let freq = new Array(max + 1).fill(0);
  
  // Calculate count of elements
  for (let i = 0; i < size; i++){
      const num = Math.floor(arr[i] / place) % 10;
      freq[num]++;
  }
  
  // Calculate cummulative count
  for (let i = 1; i < 10; i++){
      freq[i] += freq[i - 1];
  }

  // Place the elements in sorted order
  for (let i = size - 1; i >= 0; i--) {
      const num = Math.floor(arr[i] / place) % 10;
      output[freq[num] - 1] = arr[i];
      freq[num]--;
  }
  
  //Copy the output array
  for (let i = 0; i < size; i++){
    arr[i] = output[i];
    onAction({type:ACTIONS.ASSIGNMENT, data:[i, output[i]]})
  }
}

const radixSort = (arr, onAction, size = arr.length) => {
  //Get the max element
  let max = Math.max(...arr);
  
  //Sort the array using counting sort
  for(let i = 1; parseInt(max / i) > 0; i *= 10){
    countSort(arr, size, i, onAction);
  }
}

function ArrayMember(x, y, width, height, color = arrayColor) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  
  this.draw = () => {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  this.resetColor = () => this.setColor(arrayColor);

  this.setColor = (color) => {
    if (!this.isSorted()) {
      this.color = color;
    }
  };

  this.checkSorted = () => {
    for(let i = 0; i< this.arrayMembers.length; i++)
      if(!this.arrayMembers[i].isSorted)
        return Premise.resolve(false)
    return Premise.resolve(true)
  }

  this.isSorted = () => this.color === green;

  this.sorted = () => (this.color = green);

  this.setValue = (v, color) => {
    if (!this.isSorted()) {
      this.height = v;
      this.y = canvas.height-v
      this.setColor(color);
    }
  };
  this.getValue = (v) => this.height;
}

const randomArray = shuffledArrayInRange();
const arrayMembers = randomArray.map((v, i) => {
  return new ArrayMember(getProportionalWidth(randomArray.length) * i, canvas.height-getProportionalHeigth(v,ELEMENTS), getProportionalWidth(randomArray.length)-0.5, getProportionalHeigth(v, randomArray.length));
});

const countingSort = (a, onAction) => {
  let max = a[0] 
  for(let i = 1; i<a.length; i++)
    max = a[max] < a[i] ? a[i] : a[max]
  let counter = []
  for(let i = 0; i<=max; i++)
      counter.push(0)
  for(let i = 0; i<a.length; i++){
    onAction({type:ACTIONS.COMPARE, data:[i,i]})
    counter[a[i]] = isNaN(counter[a[i]]) ? 0 : counter[a[i]]
    counter[a[i]]+=1
  }
  let index = 0
  for(let countIndex = 0; countIndex<counter.length; countIndex++){
    for(let i = 0; i<counter[countIndex]; i++){
      onAction({type:ACTIONS.COMPARE, data:[index,index]})
        a[index] = countIndex
        onAction({type:ACTIONS.ASSIGNMENT, data:[index, countIndex]})
        index++
    }
  }
}

const merge = (arr, start, mid, end, onAction) => {
    let start2 = mid + 1;
 
    if (arr[mid] <= arr[start2])
    {
        return;
    }

    while (start <= mid && start2 <= end)
    {
        onAction({type: ACTIONS.COMPARE, data: [start, start2]})
        if (arr[start] <= arr[start2])
        {
            start++;
        }
        else
        {
            let value = arr[start2];
            let index = start2;
            while (index != start)
            {
                arr[index] = arr[index - 1];
                onAction({type:ACTIONS.ASSIGNMENT, data:[index, arr[index-1]]})
                index--;
            }
            arr[start] = value;
            onAction({type:ACTIONS.ASSIGNMENT, data:[start, value]})
 
            start++;
            mid++;
            start2++;
        }
    }
}

const mergeSort = (arr, onAction, l=0, r=arr.length-1) => {
    if (l < r)
    {
        let m = l + Math.floor((r - l) / 2);
 
        // Sort first and second halves
        mergeSort(arr,onAction, l, m);
        mergeSort(arr, onAction, m + 1, r);
 
        merge(arr, l, m, r, onAction);
    }
}

const drawAll = () => arrayMembers.forEach((m) => m.draw());

drawAll();

const myAction = (action) => {
    ticks++;
    setTimeout(() => {
      actionsMap[action.type](action, arrayMembers);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      drawAll(arrayMembers);
      arrayMembers.forEach((m) => m == arrayMembers.selectedIndex ? m.setColor(swapColor) : m.resetColor());
    }, ticks * SPEED);
  }

let ticks = 0;

const checkSorted  = async (a) => {
  for(let i = 1; i<a.length; i++)
    if(a[i]<a[i-1])
      return await Promise.resolve(false);
  return await Promise.resolve(true);
}


const runSort = (f) => {
    f(randomArray, myAction);
    markSorted(randomArray, myAction)
  }
  runSort(getSorting())
  /*
  setTimeout(function(){
    window.location.reload(1);
 }, 60000);*/
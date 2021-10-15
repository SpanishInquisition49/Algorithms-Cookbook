def selectionSort(array):
    for i in range(0, len(array)):
        minIndex = min(array, i)
        swapper = array[i]
        print(array)
        array[i] = array[minIndex]
        print(array)
        array[minIndex] = swapper
        print(array)

def min(array, index):
    min = index
    for i in range(index+1, len(array)):
        if array[i] < array[min]:
            min = i
    return min

array = [5,6,7,2,3,4,4,44,2]
selectionSort(array)
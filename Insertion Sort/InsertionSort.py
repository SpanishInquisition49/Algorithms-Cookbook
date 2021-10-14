def insertionSort(a):
    for j in range(1, len(a)):
        key = a[j]
        i = j-1
        while i>=0 and a[i] > key:
            a[i+1] = a[i]
            print(a)
            i-=1
        a[i+1] = key 
        print(a)

array = [6, 5, 4, 3, 2, 1]
insertionSort(array)
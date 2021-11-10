import math
def mergeSort(a):
    half = math.trunc(len(a) / 2)
    if len(a) < 2:
        return a
    left = mergeSort(a[:half])
    right = mergeSort(a[half+1:])
    return merge(left, right)

def merge(left, right):
    res = []
    while len(left) and len(right):
        if left[0] < right[0]:
            res = res + left[0]
            left.pop(0)
        else:
            res += right[0]
            right.pop(0)
    res = res + left
    res = res + right
    return res

arr = [0,7,8,9,4,5,6,3,2,1,12,34,67,77,78,99]
print(arr[math.trunc(len(arr)/2)+1:])
brr = mergeSort(arr)
#print(mergeSort(brr))


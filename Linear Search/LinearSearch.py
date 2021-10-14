def linearSearch(a, v):
    for i in range(0, len(a)):
        if a[i] == v:
            print('a[%i]=%i == %i' % (i, a[i], v)) 
            return i
        else:
           print('a[%i]=%i != %i' % (i, a[i], v)) 

array = [6, 5, 4, 3, 2, 1]
linearSearch(array, 3)
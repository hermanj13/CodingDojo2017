def multiply(a,x):
    for i in range(0, len(a)):
        a[i] *= x
    return a

arr = [2,4,10,16]

print multiply(arr,5)

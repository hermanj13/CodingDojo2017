#Multiples
#Part One
count = 0
for count in range(0,1000):
    print count
    count += 1

#Part Two

count = 0
for count in range(5,1000000):
    while count%5 == 0:
        print count
        count +=1

#Sum List
a = [1, 2, 5, 10, 255, 3]
sum = 0
i = 0
while i < len(a):
    sum = sum + a[i]
    i += 1
print sum

#Avg List
a = [1, 2, 5, 10, 255, 3]
sum = 0
i = 0
while i < len(a):
    sum = sum + a[i]
    i += 1
avg = sum/len(a)
print avg

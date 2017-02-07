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
total = 0
i = 0
while i < len(a):
    total = total + a[i]
    i += 1
print total

#Avg List
a = [1, 2, 5, 10, 255, 3]
total = 0
i = 0
while i < len(a):
    total = total + a[i]
    i += 1
avg = total/len(a)
print avg

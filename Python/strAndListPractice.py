str1 = "If monkeys like bananas, then I must be a monkey!"
print str1.find('monkey')
print str1.find('monkey', str1.find('like')+1)


strnew = str1.replace('monkey','alligator')
print strnew

x = [2,54,-2,7,12,98]
print max(x)
print min(x)

x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[len(x)-1]

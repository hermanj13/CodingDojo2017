str = "If monkeys like bananas, then I must be a monkey!"
print str.find('monkey')
print str.find('monkey', str.find('like')+1)


strnew = str.replace('monkey','alligator')
print strnew

x = [2,54,-2,7,12,98]
print max(x)
print min(x)

x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[len(x)-1]

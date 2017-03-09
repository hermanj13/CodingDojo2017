x = [1,3,4,6,7,13]
y = [-3,-7,-1]
# Print 1-255
(1..255).each {|i| puts i}

# Print odd numbers between 1-255
puts (1..255).find_all {|i| i % 2 == 1}

# print Sum
sum = 0
0.upto(255) {|i| sum += i}
puts sum

# iterating through an array
x.each {|i| puts i}

# find max
puts x.max

# get average
sum = 0
x.each {|i| sum += i}
puts sum.to_f / x.length.to_f

# array with odd numbers
puts (1..255).find_all {|i| i%2 ==1}.to_a

#Greater Than Y
arr = [1,3,5,7]
puts arr.find_all {|i| i>3}

#Square the Values
arr = [1, 5, 10, -2]
puts arr.collect {|i| i*i}

#Eliminate Negative numbers
arr = [1, 5, 10, -2]
puts arr.collect {|i| i < 0? 0:i}

#Max, Min and average
x = [1, 5, 10, -2]
sum = 0
x.each {|i| sum += i}
avg =  sum.to_f / x.length.to_f
puts [x.min, x.max, avg]

#Shifting the Values in the Array
arr = [1, 5, 10, -2]
arr.shift
arr.push(0)
puts arr
#Number to String
arr = [1, 5, 10, -2]
puts arr.collect {|i| i < 0? 'dojo':i}

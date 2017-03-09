# Ruby Puzzles 1
arr = [3,5,1,2,7,9,8,13,25,32]
puts arr.reduce(:+)
puts arr.find_all {|i| i>10}.inspect

# Ruby Puzzles 2
arr = ['John', 'KB', 'Oliver', 'Cory', 'Matthew', 'Christopher']
puts arr.shuffle.inspect
puts arr.find_all {|i| i.length < 5}.inspect

#Ruby Puzzles 3
arr = ('a'..'y').to_a
puts arr.shuffle!.inspect
puts arr[0].inspect
puts arr[24].inspect
puts arr[0].include?('a') || arr[0].include?('e') || arr[0].include?('i') || arr[0].include?('o') || arr[0].include?('u')

# Ruby Puzzles 4
arr = []
arr << 10.times.map{rand(55..100)}
puts arr

# Ruby Puzzles 5
arr = []
arr << 10.times.map{rand(55..100)}
sort = arr[0].sort
puts sort.inspect
puts arr[0].inspect
puts arr[0].max
puts arr[0].min

# Ruby Puzzles 6
str = ""
for x in (1..5)
  str << (65+rand(26)).chr
end
puts str.inspect

#Ruby Puzzles 7
arr=[]
for x in 1..10
  str = ""
  for x in (1..5)
    str << (65+rand(26)).chr
  end
  arr << str
end
puts arr.inspect

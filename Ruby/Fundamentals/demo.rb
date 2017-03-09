a = ['blue', 'yellow', 'eggs', 'ja', 'ew']
b = [3,4,5,6]
x = (1..5)
y = ('a'..'z')
# puts a.any? { |word| word.length >= 3 }
# a.each {|word| puts word, "--"}

# puts a.collect {"cat"}
# puts b.collect {|i| i*2}

# puts b.find_all {|i| i%2 == 0}
# puts b.max
#
# puts x.include? 3
# puts y.to_a.shuffle.to_s

def test
  yield 5
  puts "You are in the method test"
  yield 100
end
test { |i| puts "You are in the block #{i}" }

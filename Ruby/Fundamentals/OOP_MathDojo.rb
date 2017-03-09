class MathDojo
  def initialize
    @sum = 0
  end
  def add(*numbers)
    numbers.each {|n| @sum += n}
    self
  end
  def subtract(*numbers)
    numbers.each {|n| @sum -= n}
    self
  end
  def results
    puts @sum
  end
end

challenge1 = MathDojo.new.add(2).add(2,5).subtract(3,2).results

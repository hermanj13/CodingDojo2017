class AppleTree
  attr_accessor :age
  attr_reader :height, :appleCount
  def initialize age, height
    @age = age
    @height = height
    @appleCount = 0
  end
  def year_gone_bye
    @age += 1
    @height += (@height*0.1)
    if @age > 3 && @age < 10
     @appleCount += 2
    end
  end
  def pick_apples
    @appleCount = 0
  end
end

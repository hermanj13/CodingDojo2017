class Human
  attr_accessor :health
  def initialize
    @strength = 3
    @intelligence = 3
    @stealth = 3
    @health = 100
  end
  def attack(object)
    if object.class.ancestors.include? Human
      object.health -= 11
    end
    self
  end
end

Jake = Human.new
Jingles = Human.new

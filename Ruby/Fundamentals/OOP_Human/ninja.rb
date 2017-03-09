require_relative 'human'
class Ninja < Human
  def initialize
    super
    @stealth = 175
  end
  def steal(object)
    attack(object)
    @health += 10
    self
  end
  def get_away
    @health -=15
    puts "You Escaped!"
  end
end

Marco = Ninja.new
Marco.steal(Jake)

require_relative 'human'
class Samurai < Human
  @@number_of_us = 0
  def initialize
    super
    @health = 200
    @@number_of_us += 1
  end
  def death_blow(object)
    if object.class.ancestors.include? Human
      object.health = 0
    end
    self
  end
  def mediatate
    @health = 200
    self
  end
  def how_many
    puts @@number_of_us
  end
end

Jackie = Samurai.new

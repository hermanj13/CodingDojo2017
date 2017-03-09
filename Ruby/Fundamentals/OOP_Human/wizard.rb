require_relative 'human'
class Wizard < Human
  def initialize
    super
    @health = 50
    @intelligence = 25
  end
  def heal
    @health += 10
    self
  end
  def fireball(object)
    if object.class.ancestors.include? Human
      object.health -= 20
    end
    self
  end
end

HarryPotter = Wizard.new
HarryPotter.fireball(Jake)
puts Jake.health

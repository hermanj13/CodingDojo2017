class Project
  def initialize(name, description)
    @name = name
    @description = description
  end
  def name
    @name
  end
  def elevator_pitch
    puts "#{@name},#{@description}"
  end
end

project1 = Project.new("WOOOOOO", "SO FUN!")
puts project1.name
project1.elevator_pitch

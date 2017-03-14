class Project
  attr_accessor :name, :description, :owner, :tasks
  def initialize name, description, owner
    @name = name
    @description = description
    @owner = owner
    @tasks = []
  end
  def add_tasks(task)
    @tasks << task
  end
  def print_tasks
    @tasks.each do |task|
      puts task
    end
  end
  def elevator_pitch
    "#{@name}, #{@description}"
  end
end
#
# @project1 = Project.new('Project 1', 'description 1', 'John Doe')
# puts @project1.tasks.inspect
# @project1.add_tasks('yes!')
# puts @project1.tasks.inspect

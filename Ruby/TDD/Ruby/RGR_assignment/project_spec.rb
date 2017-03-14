require_relative 'project'
RSpec.describe Project do
  before(:each) do
    @project = Project.new("Name","Description")
  end
  it "has a getter and setter for name attribute" do
    @project.name = "ChangedName"
    expect(@project.name).to eq("ChangedName")
  end
  it "has a getter and setter for the description attribute" do
    @project.description = "ChangedDescription"
    expect(@project.description).to eq("ChangedDescription")
  end
  it 'has a method elevator_pitch to explain name and description' do
    expect(@project.elevator_pitch).to eq("Name, Description")
  end
end

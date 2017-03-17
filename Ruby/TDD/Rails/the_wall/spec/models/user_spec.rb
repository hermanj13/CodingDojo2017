require 'rails_helper'

RSpec.describe "User:", type: :model do
  context "With valid attributes" do
    it "Should save" do
      user = User.create(username:"Jakers")
      expect(user).to be_valid
    end
  end
  context "With invalid attributes:" do
    it "Username should be required" do
      user = User.create(username:"")
      expect(user).to be_invalid
    end
    it "Username must be unique" do
      user = User.create(username:"Jakers")
      user2 = User.create(username:"Jakers")
      expect(user2).to be_invalid
    end
    it "Username must be 5 characters" do
      user = User.create(username:"Jacob")
      expect(user).to be_invalid
    end
  end
end

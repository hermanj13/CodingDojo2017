require 'rails_helper'

RSpec.describe User do
  context "With valid attributes" do
    it "should save" do
      user = User.create(
        first_name: 'shave',
        last_name: 'chang',
        email: 'schang@codingdojo.com'
      )
      expect(user).to be_valid
    end
  end

  context "With invalid attributes" do
    it "should not save if first_name field is blank" do
      user = User.create(
            first_name: '',
            last_name: 'chang',
            email: 'schang@codingdojo.com'
        )
      expect(user).to be_invalid
    end
  end

  it "should not save if last_name field is blank" do
    user = User.create(
          first_name: 'shave',
          last_name: '',
          email: 'schang@codingdojo.com'
      )
    expect(user).to be_invalid
  end


  it "should not save if email already exists" do
    user = User.create(
          first_name: 'shave',
          last_name: 'chang',
          email: 'schang@codingdojo.com'
      )
    expect(user).to be_valid
    user2 = User.create(
          first_name: 'shave',
          last_name: 'chang',
          email: 'schang@codingdojo.com'
      )
    expect(user2).to be_invalid
  end
  it "should not save if invalid email format" do
    user = User.create(
          first_name: 'shave',
          last_name: 'chang',
          email: 'schangcodingdojo.com'
      )
    expect(user).to be_invalid
  end
end

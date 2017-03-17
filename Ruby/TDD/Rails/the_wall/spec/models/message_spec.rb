require 'rails_helper'

RSpec.describe 'Message:', type: :model do
  before(:each) do
    @user = User.create(username:'Jakers')
  end
  context 'With valid attributes:' do
    it 'Should save' do
      message = Message.create(message: 'This is valid message!', user: @user)
      expect(message).to be_valid
    end
  end
  context 'With invalid attributes:' do
    it 'message must be 10 characters' do
      message = Message.create(message: 'invalid', user: @user)
      expect(message).to be_invalid
    end
    it 'message must have a user' do
      message = Message.create(message: 'This is a valid message!')
      expect(message).to be_invalid
    end
  end
end

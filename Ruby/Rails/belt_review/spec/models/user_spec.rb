require 'rails_helper'

RSpec.describe User, type: :model do
  context 'with valid attributes' do
    it 'should save' do
      expect(build(:user)).to be_valid
    end
    it 'encrypts password' do
      expect(build(:user).password_digest.present?).to eq(true)
    end
    it 'email should be lowercase' do
      expect(create(:user, email: 'EMAIL@GMAIL.COM').email).to eq('email@gmail.com')
    end
    it 'first name should be capitalized' do
      expect(create(:user, first: 'jake').first).to eq('Jake')
    end
    it 'last name should be capitalied' do
      expect(create(:user, last: 'herman').last).to eq('Herman')
    end
    it 'city should be capitalized' do
      expect(create(:user, city: 'fairfax').city).to eq('Fairfax')
    end
  end
  context 'with invalid attributes should not save' do
    it 'first name should be present' do
      expect(build(:user, first: '')).to be_invalid
    end
    it 'last name should be present' do
      expect(build(:user, last: '')).to be_invalid
    end
    it 'email should be present' do
      expect(build(:user, email: '')).to be_invalid
    end
    it 'email format is incorrect' do
      expect(build(:user, email: 'error@error')).to be_invalid
    end
    it 'city is blank' do
      expect(build(:user, city: '')).to be_invalid
    end
    it 'state is blank' do
      expect(build(:user, state: '')).to be_invalid
    end
    it 'state is more then 2 characters' do
      expect(build(:user, state: 'Virginia')).to be_invalid
    end
    it 'password is blank' do
      expect(build(:user, password: '')).to be_invalid
    end
    it 'password confirmatinon does not match' do
      expect(build(:user, password_confirmation: 'notmatching')).to be_invalid
    end
  end
end

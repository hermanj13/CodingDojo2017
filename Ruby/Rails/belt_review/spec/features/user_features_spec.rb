require 'rails_helper'
feature 'User features ' do
  before do
    # calling factory girl create method
    @user = create(:user)
  end
  feature "user sign-up" do
    before(:each) do
      visit "/"
    end
    scenario 'visits login page' do
      expect(page).to have_content 'Register'
      expect(page).to have_field 'First'
      expect(page).to have_field 'Last'
      expect(page).to have_field 'Email'
      expect(page).to have_field 'City'
      expect(page).to have_field 'State'
      expect(page).to have_field 'Password'
      expect(page).to have_field 'Password Confirmation'
    end
    scenario 'register with proper inputs' do
      register
      expect(page).to have_content "welcome #{@user.first}"
    end
  end
end

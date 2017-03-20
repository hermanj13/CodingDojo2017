require 'rails_helper'
feature 'User features:' do
  feature 'user sign-up:' do
    scenario 'visits sign-up page' do
      visit '/users/new'
      expect(page).to have_content "Register"
      expect(page).to have_content "Email"
      expect(page).to have_content "Name"
      expect(page).to have_content "Password"
      expect(page).to have_content "Password Confirmation"
      expect(page).to have_button "Join"
    end
    scenario 'with improper inputs, redirects back to sign in and shows validations' do
      register email: 'incorrect email'
      expect(page).to have_content "Email is invalid"
    end
    scenario 'with proper inputs, create user and redirects to login page' do
      register
      expect(current_path).to eq("/sessions/new")
    end
  end
  feature 'user dashboard:' do
    scenario 'displays user information' do
      log_in
    end
  end
end

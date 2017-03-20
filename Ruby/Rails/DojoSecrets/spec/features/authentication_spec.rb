require 'rails_helper'
feature 'authentication feature:' do
  before do
    @user = User.create(name:'Jake', email:'test@test.com', password:'test1234', password_confirmation:'test1234')
  end
  feature "user attempts to sign-in:" do
    scenario 'visits sign-in page, prompted with email and password fields' do
      visit '/sessions/new'
      expect(page).to have_content "Login"
      expect(page).to have_content "Email"
      expect(page).to have_content "Password"
    end
    scenario 'logs in user if email/password combination is valid' do
      log_in
      expect(current_path).to eq("/users/#{@user.id}")
      expect(page).to have_content "Welcome #{@user.name}"
    end
    scenario 'does not sign in user if email is not found' do
      log_in email:'nottester@test.com'
      expect(current_path).to eq("/sessions/new")
      expect(page).to have_content "Invalid Email"
    end
    scenario 'does not sign in user if password is invalid' do
      log_in password:'OOOOOOOOO!@#O!@#'
      expect(current_path).to eq("/sessions/new")
      expect(page).to have_content "Invalid Password"
    end
  end
  feature "user attempts to log out:" do
    scenario 'displays "Log Out" button when user is logged on' do
      log_in
      expect(page).to have_button("Log Out")
    end
    scenario 'logs out user and redirects to login page' do
      log_in
      click_button "Log Out"
      expect(current_path).to eq("/sessions/new")
    end
  end
end

require 'rails_helper'
feature "guest user creates an account:" do
  scenario "successfully creates a new user account" do
    visit '/users/new'
    fill_in "username", with: "Jakers"
    click_button "Create User"
    expect(page).to have_content "CodingDojo Wall"
    expect(page).to have_content "Welcome Jakers"
  end
  scenario "unsuccessfully creates a new user account" do
    visit '/users/new'
    fill_in "username", with: "Jake"
    click_button "Create User"
    expect(page).to have_content "Username is too short (minimum is 6 characters)"
  end
end
feature "registered user can login to there account:" do
  scenario "succesfully log in" do
    visit '/users/new'
    fill_in "username", with: "Jakers"
    click_button "Create User"
    expect(page).to have_content "Welcome Jakers"
    click_link "Log Out"
    expect(page).to have_content "Sign In"
    fill_in "username", with: "Jakers"
    click_button "Create User"
    expect(page).to have_content "Welcome Jakers"
  end
end
feature "user can posts on page:" do
  scenario "successfully creates a new post" do
    visit '/users/new'
    fill_in "username", with: "Jakers"
    click_button "Create User"
    expect(page).to have_content "CodingDojo Wall"
    expect(page).to have_content "Welcome Jakers"
    fill_in "message", with: "Welcome to my page of wisdom!"
    click_button "Post a Message"
    expect(page).to have_content "Welcome to my page of wisdom!"
  end
  scenario "unsuccessfully creates a new post" do
    visit '/users/new'
    fill_in "username", with: "Jakers"
    click_button "Create User"
    expect(page).to have_content "CodingDojo Wall"
    expect(page).to have_content "Welcome Jakers"
    fill_in "message", with: "Invalid"
    click_button "Post a Message"
    expect(page).to have_content "Message is too short (minimum is 11 characters)"
  end
end
feature "user can log out:" do
  scenario "successfully logs out" do
    visit '/users/new'
    fill_in "username", with: "Jakers"
    click_button "Create User"
    expect(page).to have_content "Welcome Jakers"
    click_link "Log Out"
    expect(page).to have_content "Sign In"
  end
end

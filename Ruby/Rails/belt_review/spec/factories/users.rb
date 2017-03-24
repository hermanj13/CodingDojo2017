FactoryGirl.define do
  factory :user do
    first "Jakers"
    last "Herman"
    email "hermanj13@me.com"
    city "Fairfax"
    state "VA"
    password "test1234"
    password_confirmation "test1234"
  end
end

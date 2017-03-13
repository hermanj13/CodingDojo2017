require 'test_helper'

class DatetimesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end

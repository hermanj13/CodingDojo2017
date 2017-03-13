class FormController < ApplicationController
  def index
  end

  def create
    User.create(user_params)
    flash[:success] = "This form has been submited #{User.count} times now!"
    redirect_to('/results')
  end

  def show
    @user = User.last
    @count = User.count
  end

  private
  def user_params
    params.require(:user).permit(:name, :location, :language, :comment)
  end
end

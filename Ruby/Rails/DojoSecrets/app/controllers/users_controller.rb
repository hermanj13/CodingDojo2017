class UsersController < ApplicationController
  def new
  end

  def show
  end

  def create
    user = User.new(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])
    if user.save
      user = User.find_by(:email => params[:email])
      session[:user_id] = user.id
      redirect_to ('/sessions/new')
    else
      flash[:notice] = user.errors.full_messages
      redirect_to ('/users/new')
    end
  end
end

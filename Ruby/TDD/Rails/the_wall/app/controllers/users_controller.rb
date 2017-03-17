class UsersController < ApplicationController
  def new
  end

  def create
    if User.exists?(:username => params[:username])
      user = User.find_by(:username => params[:username])
      session[:user] = user
      redirect_to('/messages')
    else
      user = User.new(username: params[:username])
      if user.save
        session[:user] = User.find_by(:username => params[:username])
        redirect_to ('/messages')
      else
        flash[:errors] = user.errors.full_messages
        redirect_to ('/users/new')
      end
    end
  end

  def logout
    session.clear
    redirect_to ('/users/new')
  end
end

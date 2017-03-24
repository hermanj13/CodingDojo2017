class UserController < ApplicationController
  skip_before_action :logged_in, except: [:edit, :update]
  def create
    user = User.new(first: params[:first],last: params[:last], email: params[:email], city: params[:city],state: params[:state], password: params[:password], password_confirmation: params[:password_confirmation])
    if user.save
      user = User.find_by(:email => params[:email])
      session[:user_id] = user.id
      redirect_to ('/events')
    else
      flash[:notice] = user.errors.full_messages
      redirect_to ('/')
    end
  end

  def edit
  end

  def update
    user = current_user
    if user.update(first: params[:first], last: params[:last], email: params[:email], city: params[:city])
      redirect_to ('/events')
    else
      flash[:notice] = user.errors.full_messages
      redirect_to ("/user/#{current_user.id}")
    end
  end
end

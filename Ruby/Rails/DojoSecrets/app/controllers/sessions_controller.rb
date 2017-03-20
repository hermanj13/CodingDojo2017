class SessionsController < ApplicationController
  def new
  end
  def create
    if user = User.find_by(email: params[:email])
      user = user.authenticate(params[:password])
    	if user
    		session[:user_id] = user.id
				redirect_to "/users/#{user.id}"
  		else
  			flash[:notice] = ["Invalid Password"]
  			redirect_to "/sessions/new"
  		end
		else
  		flash[:notice] = ["Invalid Email"]
  		redirect_to "/sessions/new"
		end
  end
  def destroy
      session[:user_id]= nil
      redirect_to "/sessions/new"
  end
end

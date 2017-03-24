class SessionsController < ApplicationController
  skip_before_action :logged_in, except: [:destroy]
  def index
  end
  def create
    if user = User.find_by(email: params[:email])
      user = user.authenticate(params[:password])
    	if user
    		session[:user_id] = user.id
				redirect_to "/events"
  		else
  			flash[:notice] = ["Invalid Password"]
  			redirect_to "/"
  		end
		else
  		flash[:notice] = ["Invalid Email"]
  		redirect_to "/"
		end
  end
  def destroy
    reset_session
    redirect_to '/'
  end
end

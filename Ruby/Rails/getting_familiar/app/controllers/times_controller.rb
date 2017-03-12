class TimesController < ApplicationController
  def index

    if session[:counter] == nil
      session[:counter] = 1
    else
      session[:counter]+=1
    end
    render :text => 'You visited this url ' + session[:counter].to_s + ' times'
  end
  def restart
    session[:counter] = nil
    render :text => 'Destroyed the session!'
  end
end

class AttenderController < ApplicationController
    before_action :get_event
  def create
    Attender.create(event: @event, user: current_user)
    redirect_to '/events'
  end
  def destroy
    Attender.find_by(event: @event, user: current_user).destroy
    redirect_to '/events'
  end

  private
  def get_event
    @event = Event.find(params[:id])
  end
end

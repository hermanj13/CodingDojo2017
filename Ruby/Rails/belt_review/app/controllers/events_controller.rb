class EventsController < ApplicationController
  def index
    @instate = Event.where(state: current_user.state)
    @outstate = Event.where.not(state: current_user.state)
  end

  def show
    @event = Event.find(params[:id])
    @going = Attender.where(event_id: params[:id])
    @messages = Discussion.where(event_id: params[:id])
  end

  def edit
    @event = Event.find(params[:id])
  end

  def create
    event = Event.new(name: params[:name], date: params[:date], city: params[:city], state: params[:state], user_id: current_user.id)
    if event.save
      redirect_to '/events'
    else
      flash[:notice] = event.errors.full_messages
      redirect_to '/events'
    end
  end

  def update
    event = Event.find(params[:id])
    if event.update(name:params[:name],city:params[:city],date:params[:date])
      redirect_to "/events/#{event.id}"
    else
      flash[:notice] = event.errors.full_messages
      redirect_to "/events/#{event.id}/edit"
    end
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
    redirect_to '/events'
  end
end

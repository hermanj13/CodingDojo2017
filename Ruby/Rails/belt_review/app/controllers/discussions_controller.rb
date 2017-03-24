class DiscussionsController < ApplicationController
  def create
    message = Discussion.new(message: params[:message], user_id: current_user.id, event_id:params[:id])
    if message.save
      redirect_to "/events/#{params[:id]}"
    else
      flash[:notice] = message.errors.full_messages
      redirect_to "/events/#{params[:id]}"
    end
  end
end

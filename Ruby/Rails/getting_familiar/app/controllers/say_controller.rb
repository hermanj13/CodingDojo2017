class SayController < ApplicationController
  def dojo
    render :text => 'Hello CodingDojo!'
  end
  def index
    render :text => 'What do you want me to say???'
  end
  def hello
    render :text => 'Saying Hello!'
  end
  def joe
    render :text => 'Saying Hello Joe!'
  end
  def michael
    redirect_to '/say/hello/joe'
  end
end

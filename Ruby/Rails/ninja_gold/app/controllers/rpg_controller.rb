class RpgController < ApplicationController
  def index
    if session[:gold].nil?
      session[:gold] = 0
    end
    if session[:activity].nil?
      session[:activity] = ['']
    end
    if session[:gold] < 0
      redirect_to ('/lost')
    end
  end

  def process_money
    if params[:location].include? 'farm'
      farm
    end
    if params[:location].include? 'cave'
      cave
    end
    if params[:location].include? 'casino'
      casino
    end
    if params[:location].include? 'house'
      house
    end
    redirect_to('/')
  end

  def lost
  end

  def reset
    session.clear
    redirect_to('/')
  end
  private
  def farm
    gold = rand(10..20)
    session[:gold] += gold
    d = DateTime.now
    d = d.strftime("%Y/%m/%e %I:%M:%S %p")
    activity("Earned #{gold} golds from the farm! #{d}")
  end

  def cave
    gold = rand(5..10)
    session[:gold] += gold
    d = DateTime.now
    d = d.strftime("%Y/%m/%e %I:%M:%S %p")
    activity("Earned #{gold} golds from the cave! #{d}")
  end

  def casino
    gold = rand(-50..50)
    session[:gold] += gold
    d = DateTime.now
    d = d.strftime("%Y/%m/%e %I:%M:%S %p")
    if gold >= 0
      activity("Earned #{gold} golds from the casino! #{d}")
    end
    if gold < 0
      activity("Entered a casino and lost #{gold} golds... Ouch! #{d}")
    end
  end

  def house
    gold = rand(2..5)
    session[:gold] += gold
    d = DateTime.now
    d = d.strftime("%Y/%m/%e %I:%M:%S %p")
    activity("Earned #{gold} golds from the house! #{d}")
  end

  def activity(message)
    i = session[:activity].length
    while i > 0
      session[:activity][i] = session[:activity][i-1]
      i -= 1
    end
    session[:activity][0]=message
  end
end

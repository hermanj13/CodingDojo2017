class DatetimesController < ApplicationController
  def index
    d = DateTime.now.in_time_zone("America/New_York")
    @date = d.strftime("%b %e, %Y")
    @time = d.strftime("%I:%M:%S %p")
  end
end

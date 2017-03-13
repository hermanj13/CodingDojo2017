class DatetimesController < ApplicationController
  def index
    d = DateTime.now
    @date = d.strftime("%b %e, %Y")
    @time = d.strftime("%I:%M:%S %p")
  end
end

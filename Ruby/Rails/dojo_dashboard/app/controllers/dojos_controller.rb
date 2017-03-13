class DojosController < ApplicationController
  def index
    @dojos = Dojo.all
  end

  def new
  end

  def create
    dojo = Dojo.create(dojo_params)
    if dojo.valid?
      redirect_to('/dojos')
    else
      flash[:error] = dojo.errors.full_messages
      redirect_to('/dojos/new')
    end
  end

  def show
    @dojo = Dojo.find(params[:id])
    puts @dojo
  end

  def edit
    @dojo = Dojo.find(params[:id])
  end

  def update
    dojo = Dojo.find(params[:id])
    dojo.update(dojo_params)
    if dojo.valid?
      redirect_to('/dojos/')
    else
      flash[:error] = dojo.errors.full_messages
      redirect_to ('/dojos/' + params[:id] + '/edit')
    end
  end

  def destroy
    dojo = Dojo.find(params[:id])
    dojo.delete
    redirect_to('/dojos')
  end

  private
  def dojo_params
    params.require(:dojo).permit(:branch, :street, :city, :state)
  end
end

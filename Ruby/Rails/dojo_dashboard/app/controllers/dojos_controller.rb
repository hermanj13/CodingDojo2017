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
    @dojo = Dojo.find(params[:dojo_id])
    @students = Student.where('dojo_id = ?', params[:dojo_id])
  end

  def edit
    @dojo = Dojo.find(params[:dojo_id])
  end

  def update
    dojo = Dojo.find(params[:dojo_id])
    dojo.update(dojo_params)
    if dojo.valid?
      redirect_to('/dojos/')
    else
      flash[:error] = dojo.errors.full_messages
      redirect_to ('/dojos/' + params[:dojo_id] + '/edit')
    end
  end

  def destroy
    dojo = Dojo.find(params[:dojo_id])
    dojo.delete
    redirect_to('/dojos')
  end

  private
  def dojo_params
    params.require(:dojo).permit(:branch, :street, :city, :state)
  end
end

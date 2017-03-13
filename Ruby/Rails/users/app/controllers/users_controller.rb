class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
  end

  def create
    User.create(first: params[:first], last: params[:last], age: params[:age])
    return redirect_to('/users')
  end

  def show
    render json: User.where("id = '#{params[:id]}'")
  end

  def edit
    @user = User.where("id = '#{params[:id]}'")
  end

  def update
    User.where("id = '#{params[:id]}'").first.update(first: params[:first], last: params[:last], age: params[:age])
    return redirect_to('/users')
  end

  def total
    @count = User.count
  end
end

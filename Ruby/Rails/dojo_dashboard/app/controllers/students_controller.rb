class StudentsController < ApplicationController
  def new
    @this = Dojo.find(params[:dojo_id])
    @dojos = Dojo.where.not('id = ?', params[:dojo_id])
  end

  def create
    student = Student.create(student_params)
    if student.valid?
      redirect_to('/dojos/'+ params[:dojo_id])
    else
      flash[:error] = student.errors.full_messages
      redirect_to('/dojos/'+ params[:dojo_id] + '/students/new')
    end
  end

  def show
    @dojo = Dojo.find(params[:dojo_id])
    @student = Student.find(params[:id])
    @others = Student.where('dojo_id = ?', params[:dojo_id]).where.not('id = ?', params[:id])
    puts @others.inspect
  end

  def edit
    @student = Student.find(params[:id])
    @this = Dojo.find(params[:dojo_id])
    @dojos = Dojo.where.not('id = ?', params[:dojo_id])
  end

  def update
    @student = @student = Student.find(params[:id])
    @student.update(student_params)
    if @student.valid?
      redirect_to('/dojos/'+ @student.dojo_id.to_s + '/students/' + params[:id])
    else
      flash[:error] = student.errors.full_messages
      redirect_to('/dojos/'+ @student.dojo_id + '/students/' + params[:id] + '/edit')
    end
  end

  def destroy
    student = Student.find(params[:id])
    student.delete
    redirect_to('/dojos/'+ params[:dojo_id])
  end

  private
  def student_params
    params.require(:student).permit(:first_name, :last_name, :email, :dojo_id)
  end
end

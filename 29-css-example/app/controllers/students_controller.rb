class StudentsController < ApplicationController
  before_action :check_user

  def index
    # check_user
    # if session[:teacher_id]
      @students = Student.all
    # else 
      # redirect_to login_path
    # end
  end

  def show
    # check_user
    # if session[:teacher_id]
      @student = Student.find_by(id: params[:id])
    # else 
      # redirect_to login_path
    # end
  end

  def new
    @student = Student.new
  end

  def create
    @student = Student.new(student_params)

    if @student.save
      redirect_to @student
    else
      render :new
    end
  end

  private
  def student_params
    params.require(:student).permit(:name, :email, :cohort_id)
  end
end

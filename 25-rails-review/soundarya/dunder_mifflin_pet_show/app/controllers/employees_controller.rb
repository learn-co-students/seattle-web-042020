class EmployeesController < ApplicationController
  def index 
    @employees = Employee.all.uniq
  end

  def show
    @employee = Employee.find(params[:id])
  end

  def new 
    @employee = Employee.new
  end

  def create
    # byebug
    @employee = Employee.new(params.require(:employee).permit(:first_name, :last_name, :alias, :title, :office))
    if @employee.save 
      redirect_to @employee
    else
      flash[:message] = @employee.errors.full_messages
      render :new
    end
  end 
end

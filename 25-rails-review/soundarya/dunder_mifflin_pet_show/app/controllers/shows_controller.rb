class ShowsController < ApplicationController
  def index
    @shows = Show.all
  end

  def show
    @show = Show.find(params[:id])
  end

  def new 
    @show = Show.new
  end

  def create
    @show = Show.create(show_params)
    redirect_to dogs_path
  end

  private
  def show_params
    params.require(:show).permit(:dog_id, :employee_id)
  end
end

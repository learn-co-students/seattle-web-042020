class StudiosController < ApplicationController
    def index
        @studios = Studio.all
    end 

    def show
        @studio = Studio.find(params[:id])
    end 

    def new
        @studio = Studio.new
    end 

    def create
        @studio = Studio.create(studio_params)
        if @studio.valid?
            redirect_to studio_path(@studio)
        else
            flash[:banana] = @studio.errors.full_messages
            
            redirect_to new_studio_path

        end 
    end 

    private 

    def studio_params
        params.require(:studio).permit(:name, :location, :founding_year)
    end 
end

class ShowsController < ApplicationController
    def index
        @shows = Show.all
    end 

    def show
        @show = Show.find(params[:id])
    end 

    def new 
        @show = Show.new
        @dogs =  Dog.all
        @employees = Employee.all
    end 

    def create
        @show = Show.create(show_params)

        if @show.valid?
            redirect_to show_path(@show.id)
        else
            flash[:error] = @show.errors.full_messages
            
            redirect_to new_show_path
        end 


    end

    def edit 
        @show = Show.find(params[:id])
    end

    def delete 
    end 

    private 

    def show_params
        params.require(:show).permit(:dog_id, :employee_id)
    end 

end

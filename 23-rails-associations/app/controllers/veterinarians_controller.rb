class VeterinariansController < ApplicationController
    def index
        @veterinarians = Veterinarian.all
    end 

    def show
        @veterinarian = Veterinarian.find(params[:id])
     
        @appointment = Appointment.new
        @appointment.veterinarian_id = @veterinarian.id
        @cats = Cat.all
        
    end 

    def new
        @veterinarian = Veterinarian.new 
        @city = City.all
    end 

    def create
        @veterinarian = Veterinarian.create(veterinarians_params)
        redirect_to veterinarian_path(@veterinarian.id)
    end 

    def edit
        @veterinarian = Veterinarian.find(params[:id])
        @cities = City.all
    end 

    def update
        @veterinarian = Veterinarian.find(params[:id])
        @veterinarian.update(veterinarians_params)
        redirect_to @veterinarian
    end 
 
    def destroy
        @veterinarian = Veterinarian.find(params[:id])
        @veterinarian.destroy
        redirect_to veterinarians_path
    end 


    private 

    def veterinarians_params
        params.require(:veterinarian).permit(:name,:rooms, :city_id)
    end 


end 
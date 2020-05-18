class HomesController < ApplicationController
    def index
        @homes = Home.all
    end 

    def show
        @home = Home.find(params[:id])
    end 

    def new
        @home = Home.new 
    end 

    def create
        byebug
        @home = Home.create(homes_params)
        redirect_to home_path(@home.id)
    end 

    def edit
        @home = Home.find(params[:id])
    end 

    def update
        @home = Home.find(params[:id])
        @home.update(homes_params)
        redirect_to @home
    end 

    def delete
    end 

    private 

    def homes_params
        params.require(:home).permit(:name,:rooms, :city_id)
    end 


end 
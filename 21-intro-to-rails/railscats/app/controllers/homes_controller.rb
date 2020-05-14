class HomesController < ApplicationController
    def index
        @homes = Home.all
    end 

    def show
        @home = Home.find(params[:id])
    end 
end 
class MoviesController < ApplicationController

    def index
        @movies = Movie.all
    end 

    def show
        @movie = Movie.find(params[:id])
    end 

    def new
        @movie = Movie.new
        @studios = Studio.all
        @directors = Director.all
    end 

    def create
        @movie = Movie.create(movie_params)
        if @movie.valid?
            redirect_to movie_path(@movie)
        else
            redirect_to new_movie_path
        end 
    end 

    private 

    def movie_params
        params.require(:movie).permit(:name, :studio_id, :director_id)
    end 
end

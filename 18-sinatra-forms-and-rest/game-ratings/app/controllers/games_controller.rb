class GamesController < ApplicationController
	# Read in CRUD
	get '/games' do
		@games = Game.all

		erb :"games/index"
	end

	# Create in CRUD
	get '/games/new' do
		erb :"games/new"
	end
	
	# Read in CRUD
	get '/games/:id' do
		@game = Game.find(params[:id])

		erb :"games/show"
	end

	# Create in CRUD
	post '/games' do
		# @game = Game.create(title: params[:title], description: params[:description], image_url: params[:image_url])

		@game = Game.create(params)

		redirect "/games/#{@game.id}"
	end

	# Update in CRUD
	get '/games/:id/edit' do
		@game = Game.find(params[:id])

		erb :"games/edit"
	end

	# Update in CRUD
	patch '/games/:id' do
		@game = Game.find(params[:id])

		@game.update(params[:game])
		redirect "/games/#{@game.id.to_s}"
	end

	# Delete in CRUD
	delete '/games/:id' do
		@game = Game.find(params[:id])
		@game.destroy

		redirect "/games"
	end
end

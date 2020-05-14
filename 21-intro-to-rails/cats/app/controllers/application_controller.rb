require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/cats" do
    @cats = Cat.all
    erb :index
  end

  get "/cats/:id" do
    @cat = Cat.find(params[:id])
    erb :show
  end

  post "/cats" do
    @cat = Cat.create(params[:id])
    
  end

end

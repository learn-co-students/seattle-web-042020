require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    
    erb :welcome
  end

  get '/pasta' do
   @pasta = Pasta.all
   erb :pasta
  end

end

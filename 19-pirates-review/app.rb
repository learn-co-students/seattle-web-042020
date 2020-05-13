require './environment'

module FormsLab
  class App < Sinatra::Base

    # code other routes/actions here
    get '/pirates/new' do
      erb :"pirates/new"
    end

    post '/pirates' do
      @pirate = Pirate.new(params[:pirate])
      ships = params[:ship]
      @ship_instances = ships.map do |ship|
        @ship = Ship.new(ship)
      end
      # binding.pry
      erb :"pirates/show"
    end
  end
end

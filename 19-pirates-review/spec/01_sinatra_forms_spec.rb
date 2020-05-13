describe "FormsLab::App" do
  describe "GET '/'" do
    before(:each) do
      get '/'
    end

    it "returns a 200 status code" do
      expect(last_response.status).to eq(200)
    end

    it "renders the instructions" do
      expect(last_response.body).to include("Welcome to the Nested Forms Lab!")
    end
  end

  describe "GET '/new'" do
    before(:each) do
      get '/new'
    end

    it "returns a 200 status code" do
      expect(last_response.status).to eq(200)
    end

    it "renders a new form element on the page" do
      expect(last_response.body).to include("<form")
      expect(last_response.body).to include("</form>")
    end

    it "renders the pirate input fields for name, weight, and height attributes on the page" do
      expect(last_response.body).to include("pirate[name]")
      expect(last_response.body).to include("pirate[weight]")
      expect(last_response.body).to include("pirate[height]")
    end

    it "renders the first ship's input fields for the name, type, and booty attributes on the page" do
      expect(last_response.body).to include("pirate[ships][][name]")
      expect(last_response.body).to include("pirate[ships][][type]")
      expect(last_response.body).to include("pirate[ships][][booty]")
    end

    it "renders the second ship's input field for the name, type, and booty attributes on the page" do
      expect(last_response.body).to include("pirate[ships][][name]")
      expect(last_response.body).to include("pirate[ships][][type]")
      expect(last_response.body).to include("pirate[ships][][booty]")
    end
  end

  describe "POST '/pirates'" do
    before do
      post '/pirates', {
        "pirate"=> {
          "name"=>"Ian",
          "weight"=>"165",
          "height"=>"95",
          "ships"=> [
            {
              "name"=>"Titanic",
              "type"=>"Steam Liner",
              "booty"=>"Silver"
            },
            {
              "name"=> "Carpathia",
              "type"=>"Rescue Ship",
              "booty"=>"Inner Tubes"
            }
          ]
        }
      }
    end

    after do
      Ship.clear
    end

    it "returns a 200 status code" do
      expect(last_response.status).to eq(200)
    end

    it "displays the pirate information upon form submission" do
      expect(last_response.body).to include("Ian")
      expect(last_response.body).to include("165")
      expect(last_response.body).to include("95")
    end

    it "displays the first ship's information upon form submission" do
      expect(last_response.body).to include("Titanic")
      expect(last_response.body).to include("Steam Liner")
      expect(last_response.body).to include("Silver")
    end

    it "displays the second ship's information upon form submission" do
      expect(last_response.body).to include("Carpathia")
      expect(last_response.body).to include("Rescue Ship")
      expect(last_response.body).to include("Inner Tubes")
    end
  end
end

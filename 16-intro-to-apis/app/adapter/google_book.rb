class GoogleBook
  def self.get_data(author)
    url = "https://www.googleapis.com/books/v1/volumes?q=#{author}"
    response = RestClient.get(url)
    response_body = response.body
    json_response = JSON.parse(response_body)
    books = json_response["items"].map do |item| 
      {description: item["volumeInfo"]["description"],
      title: item["volumeInfo"]["title"]}
    end
    # binding.pry
  end
end
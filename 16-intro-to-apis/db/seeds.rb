Book.destroy_all

#the main url
url = "https://www.googleapis.com/books/v1/volumes?q=#{author}"
# getting the response from this url which is a JSON
response = RestClient.get(url)
response_body = response.body
json_response = JSON.parse(response_body)
books = json_response["items"].map do |item| 
  {description: item["volumeInfo"]["description"],
  title: item["volumeInfo"]["title"]}
end

# books = GoogleBook.get_data("rickriordon")
# creates a new instance in Ruby and commits that transaction to the database
# it is running .new + .save together
books.each do |book|
  book = Book.new(book)
  book.save
end
User.create("Soundarya")
puts "done!"
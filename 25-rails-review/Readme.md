# The Dunder Mifflin Pet Show


You're right on your way to help The Dunder Mifflin Paper Company with their brand new application. It is meant to 
showcase each of the employees' pets. We’ve started some of the work for you, and we need your help to get our site fully working! Here are the deliverables:

- Build a new rails app called Dunder_Mifflin_pet_show
- Build out 3 Models Show, Dog and Employee
- Dog: has_many :shows; has_many :employees, through: :shows
- Employee: has_many :shows; has_many :dogs, through: :shows
- Show: belongs_to :dog; belongs_to :employee


- pages: Dog: index + show; employees index + show;
- validations:  dog needs a name and must 

- 
- Employee will have a first_name, last_name, alias, title, office and img_url
- Dog will have a name, breed and age
- Dogs can be connected to many Employees through Shows and an Employee will be connected many Dogs through Shows.
- Build out the associations for the models. If you look into the `seeds.rb` file, you'll notice that we've put
in the desired models and expected associations to make our app work. 
- You'll need to add `gem 'faker'` to your Gemfile to make the seeds work.
- For our index page for Dogs, a user should be able to click on a specific dog and take them to the corresponding show page.
- The Dog show page should have their name, breed, age and the list of Dunder Mifflin Employees they are connected to
- For our index page for Employees, a user should be able to click on a specific Employee and take them to their corresponding show page. There should be no duplicate employee names in the list.
- The Employee show page should list all of their attributes and the dogs they have worked with (and as a bonus, try to get their picture to show up!) There should be no duplicate dogs names in the list.


As a user, I should be able to create a show with one dog existing Dog and one existing Employee 

No one at Dunder Mifflin can have the same alias and/or job title 

BONUS: 

As a user, I should be able to create AND edit an Employee, and only be able to select 1 to many dogs with a list of checkboxes from of already existing dogs. 

Make an option to sort the dogs on the index page by the number of employees that belong to them.

Make a custom rule so that an employee can only be connected to a dog through one show at a time. 
for example Jim can have 3 dogs but there will only be one show for each of those dogs.  

## Questions??????

## SWBATs for ActiveRecord Associations
 - [ ] Add a new ActiveRecord model and associate it with an existing model
 - [ ] Display information about an associated model.
 - [ ] Allow the user to make a new instance of an ActiveRecord model that belongs to another model

## CRUD -> Sinatra
  - Create :
  - Read
  - Update
  - Delete

## Ask these quetions to outline what to do:
 - [ ] Know which questions to ask when given a new user story
    1. What new model(s) do I need?
       - New class?
       - New migration? (i.e. does the schema need to change?)
       - Associations?
       - Seeds?
    2. What route(s) do I need?
    3. What controller action(s) do I need?
       - In Sinatra, this means the code directly below the route, but in Rails it will be a separate file
    4. What view(s) do I need?


## Deliverables for today's lecture
- [ ] **As a site visitor, I should be able to see a list of companies(For the purpose of this project, an company has many games and a game belongs to one company.)**
 - [ ] Know which questions to ask when given a new user story
    1. What new model(s) do I need?
       - New class?
       `company model - company.rb` 
       - New migration? (i.e. does the schema need to change?)
        - `companies -> table`
        - `add company_id to games`
        - `name` and `image_url`
       - Associations?
        - one to many
        - `company.rb : has_many :games`
        - `game.rb : belongs_to :companies`
       - Seeds?
        - already set up. so this good to go.
    3. What controller action(s) do I need?
    - `get '/companies`
    - make a companies controller.
    4. What view(s) do I need?
      -  `index.erb`
- [ ] **As a site visitor, I should be able to view a single company.  I should be able to see the company's name and count of games.**
 - Know which questions to ask when given a new user story
    1. What new model(s) do I need?
       - no new models needed.
    3. What controller action(s) do I need?
       - `get 'companies/:id'
    4. What view(s) do I need?
      - `show.erb`
- [ ] **As a site visitor, I should be able to create a new game and associate it with an existing company.**
   - Know which questions to ask when given a new user story
    1. What new model(s) do I need?
      - no new models
    3. What controller action(s) do I need?
      - two ways
      - companies_controller: `company/:id/new_game`
      - games_controller -> `get form to create a new game`
    4. What view(s) do I need?
      - `new.erb`
### Routes Summary
| CRUD | HTTP Verb  | Route  | Action  |  View | UsedFor |
|---|---|---|---|---|---|
| Create |GET&darr; | '/games/new'  | games#new  |'new.erb'  |  form page to create a new game |
| Create | POST | '/games'  |  games#create | Reroutes to index| Creates a new game in the controller   |
| Read | GET  | '/games'  | games#index  |  index.erb|  displaying information about games  |
| Read |GET  | '/games/:id'  | games#show  |  show |display information about a specific game  |
|  Update | GET&darr; | 'games/:id/edit'  | games#edit| edit.erb  | Renders a form for user to edit  |
|  Update  | PATCH | 'games/:id'  | games#update  | redirects to show | updates the attributes in aspecific game |
| Delete  | "button" |  - |  - |  form with button in the show page | create a form so we can delete records and map it to an action  |
  |  Delete | Delete |  'games/:id' | games#delete |  | deletes/destroys a specific game in the DB|

## Resources
1. Writing a migration to rename column and changecolumn type: http://codkal.com/how-rename-databasecolumn-rails-5-migrastion/
2. HTML form elements: https://www.w3schools.comhtml/html_form_elements.asp
3. Another reference for select in HTML : https:/www.learnhowtoprogram.com/ruby/ruby-databasebasics/select-form-fields-in-sinatra

4. Select in Sinatra forms
```html
<select id="<Foreign Key Name>" name="<variable Id Name>" type="text">
  <% <Collection>.each do |item| %>
    <option value="<%=Displayed name id%>"><%= Display Name%></option>
  <% end %>
</select>
```

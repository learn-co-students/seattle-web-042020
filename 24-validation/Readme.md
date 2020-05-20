 
# SWBAT
	- Explain why Validations are necessary
	- Implement Flash messages
	- Understand the difference between render and redirect 
	- Implement both built in and custom validation in a Rails app 
	
## Break out room: check out validations

# Our APP: 
# Studios -< Movies >-Directors 
    - Review 
    - MVC
    - REST
    - Request-Response Cycle
    - Forms and Form Helpers
    - ActiveRecord Associations
    - Validations

- rails g resource builds:
	Migrations 
	Model 
	Controller 
	Views
	Routes 
	

## Steps for building a rails app 
- [x] Migrations
- [x] Models
- [x] Build relationships in model
- [x] Build Seeds
- [] CRUD
- [x] Read 
	- Routes > Index, Show
	- Controller > Index, Show
	- View > Index with a link to Show
- [] Create 
	- Routes > New, Create
	- Controller > New, Create
	- View > New > Form > Makes Post to Create
	- Strong Params
	- Create > Model.create(strong_params) > Validate > Flash message
- [] Update
	- Routes > Edit, Update
	- Controller > Edit, Update
	- View > Edit > Form > Makes Patch to Update
	- Update > .find > @model.update(strong_params) > validate > Flash message
- [] Delete
	- Routes > Destroy
	- Controller > destroy
	- View > button_to delete method
	- Destroy > .find > @model.destroy

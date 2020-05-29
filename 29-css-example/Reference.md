```ruby
Routes
resources :users
resources :students, only: [:show, :new, :index, :create]
root 'students#index'
get '/login', to: 'sessions#new'
post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'
```


```ruby
ApplicationController - code
helper_method :logged_in?
  before_action :authenticate_user


  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!session[:user_id]
    # !current_user.nil?
  end

  def authenticate_user
    if !logged_in?
      redirect_to login_path
    end
  end
```


```ruby
SessionsController
skip_before_action :authenticate_user, only: [:new, :create]

def new
end

def create
  user = User.find_by(username: params[:username])
  if user
    session[:user_id] = user.id
    redirect_to students_path
  else
    flash[:message] = 'User not found'
    redirect_to login_path
  end
end

def destroy
  session.clear
  redirect_to login_path
end
```



```ruby
StudentsController
skip_before_action :authenticate_user, only: [:new, :create]

def new
end

def create
  user = User.find_by(username: params[:username])
  if user
    session[:user_id] = user.id
    redirect_to students_path
  else
    flash[:message] = 'User not found'
    redirect_to login_path
  end
end

def destroy
  session.clear
  redirect_to login_path
end
```


```ruby
UsersController
skip_before_action :authenticate_user, only: [:new, :create]

def new
  @user = User.new
end

def create
  user = User.create(user_params)
  if user.valid?
    session[:user_id] = user.id
    redirect_to students_path
  else
    flash[:messages] = user.errors.full_messages
    redirect_to new_user_path
  end
end

private
def user_params
  params.require(:user).permit(:username)
end
```


```html
Application HTML
<!DOCTYPE html>
<html>
  <head>
    <title>StudentLister</title>
    <%= csrf_meta_tags %>

    <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track': 'reload' %>
    <%= javascript_include_tag 'application', 'data-turbolinks-track': 'reload' %>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.js"></script>
  </head>
  <div class="ui teal inverted menu">
    <a href="/" class="item">
      <h1>Student Lister</h1>
    </a>
    <div class="right menu">
      <% if logged_in? %>
        <%= link_to 'Create a New Student', new_student_path, {class: 'item'} %>
        <%= link_to 'Logout', logout_path, {class: 'item', method: 'delete'} %>
      <% else %>
        <%= link_to 'Login', login_path, {class: 'item'} %>
      <% end %>
   </div>
  </div>
  <body>
    <div class="ui centered grid ">
      <div class="eight wide column">

        <%= yield %>

      </div>
    </div>
  </body>
</html>

```


Auths Notes :
## Auths
- authentication
  - verify that a user is who they say they are
  - username and password
- authorization
  - can i do this thing
  - do i have permission to see this
  - redirect if user isn't authorized


## Steps
- create a user model
  - username
- /login => post
  - form to login
- logout?
- users/new => post /users


## Login
  - login path
  - sessions new/create
  - form_tag
  - if user is found, proceed
  - if no user, send error message back to form

## Logout
  - path
  - clear the session

class SessionsController < ApplicationController

    def new
    end
  
    def create
      @user = User.find_by(name: params[:name])
      if @user && @user.authenticate(params[:password])
      #  session[:user_id] = @user.id
      log_in_user(@user.id)
        redirect_to cookies_path
      else
        flash[:errors] = [ "We don't have a user with that username and password" ]
        redirect_to login_path
      end
    end
  
    def destroy
      log_out_user!
      redirect_to login_path
    end
  
  end
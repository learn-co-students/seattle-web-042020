class CookiesController < ApplicationController
    def index
   
        session[:user_votes] ||= 8 
        @user_votes = session[:user_votes]
        @cookies = Cookie.all     
           
    end
end

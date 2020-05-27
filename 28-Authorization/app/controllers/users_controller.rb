class UsersController < ApplicationController
    def new
        @user = User.new
    end 

    # def create
    #     @user = User.create(user_params)
    #     if @user.valid?
    #       log_in_user @user.id
    #       redirect_to coookies_path
    #     else
    #       flash[:errors] = @user.errors.full_messages
    #       redirect_to new_user_path
    #     end
    #   end
    def create
        # password_digest = BCrypt::Password.create(user_params[:password])
        # @user = User.create(name:user_params[:name], password_digest: password_digest)
        @user = User.create(user_params)
        if @user.valid?
            log_in_user(@user.id)
            redirect_to cookies_path
        else
            flash[:errors] = @user.errors.full_messages
            redirect_to new_user_path
        end
    end 
    
      private
    
      def user_params
        params.require(:user).permit(:name, :password)
      end
end

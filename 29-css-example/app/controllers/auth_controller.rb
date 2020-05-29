class AuthController < ApplicationController
    def login
    end

    def authenticate
        # byebug
        @teacher =  Teacher.find_by(username: params[:auth][:username])
        if @teacher 
            cookies[:teacher_id] = @teacher.id
            redirect_to students_path
        else 
            flash[:message] = "Incorrect Information"
            render :login
        end
    end

    def logout
        session.clear
        redirect_to login_path
    end
end
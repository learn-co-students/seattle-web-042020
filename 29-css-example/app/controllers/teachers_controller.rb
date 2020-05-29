class TeachersController < ApplicationController
    def new
        @teacher = Teacher.new
    end

    def create
        # byebug
        @teacher = Teacher.new(teacher_params)
        if @teacher.save
            redirect_to login_path
        else
            flash[:message] = @teacher.full_messages
            render :new
        end
    end

    private
    def teacher_params
        params.require(:teacher).permit(:username, :subject, :grade)
    end
end

class AppointmentsController < ApplicationController
    def create
        appointments_params[:cat_id].each{|item| Appointment.create(cat_id:item.to_i,veterinarian_id:appointments_params[:veterinarian_id])}
        byebug
    end 

    private

    def appointments_params
        params.require(:appointment).permit(:veterinarian_id, cat_id:[])
    end 
end
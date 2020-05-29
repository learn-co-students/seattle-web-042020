class ApplicationController < ActionController::Base
    helper_method :logged_in?, :check_user

    def check_user
          if !logged_in?
            redirect_to login_path
          end
      end

      def logged_in?
        !!cookies[:teacher_id]
      end
end
class Users::SessionsController < Devise::SessionsController

  layout "backend"



  	def after_sign_out_path_for(users)
  		user_session_path
  	end


  	def after_sign_in_path_for(users)
  	 	customers_path
  	end


end

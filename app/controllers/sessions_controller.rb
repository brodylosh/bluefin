class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
           buyer = Buyer.find_by(username: params[:username])
           if buyer&.authenticate(params[:password])
             session[:buyer_id] = buyer.id
             render json: buyer
           else
             render json: { errors: ["Invalid username or password"] }, status: :unauthorized
       end
   end

   def destroy
       session.delete :buyer_id
       head :no_content
   end
end

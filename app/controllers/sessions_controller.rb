class SessionsController < ApplicationController

    def create
        user = Buyer.find_by(username: params[:username])
        session[:buyer_id] = user.id
        render json: user
    end

    def destroy
        session.delete :buyer_id
        head :no_content
    end
end

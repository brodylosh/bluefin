class BuyersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        buyers = Buyer.all 
        render json: buyers, status: :ok
    end

    def show
        render json: @current_buyer
    end

    def create
        buyer = Buyer.create!(buyer_params)
        session[:buyer_id] = buyer.id
        render json: buyer, status: :created
    end

    private

    def buyer_params
        params.permit(:first_name, :last_name, :age, :img_url, :budget, :username, :password)
    end
end

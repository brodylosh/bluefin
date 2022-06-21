class BuyersController < ApplicationController

    def index
        buyers = Buyer.all 
        render json: buyers, status: :ok
    end

    def show
        buyer = Buyer.find(params[:id])
        render json: buyer, status: :ok
    end

    def create
        buyer = Buyer.create!(buyer_params)
        render json: buyer, status: :created
    end

    private

    def buyer_params
        params.permit(:first_name, :last_name, :age, :img_url, :budget, :preapproved)
    end
end

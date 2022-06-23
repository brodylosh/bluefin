class HousesController < ApplicationController

    def index
        houses = House.all
        render json: houses, status: :ok
    end

    def show
        house = House.find(params[:id])
        render json: house, status: :ok
    end

    def create
        house = House.create!(house_params)
        render json: house, status: :ok
    end

    def update
        house = House.find(params[:id])
        house.update!(house_params)
        render json: house, status: :update
    end

    def destroy
        house = House.find(params[:id])
        house.destroy
        head :no_content
    end

    private

    def house_params
        params.permit(:img_url, :address, :beds, :baths, :square_feet, :price, :agent_id)
    end
end

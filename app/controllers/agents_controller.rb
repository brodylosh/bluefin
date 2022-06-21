class AgentsController < ApplicationController

    def index
        agents = Agent.all 
        render json: agents, status: :ok
    end

    def show
        agent = Agent.find(params[:id])
        render json: agent, status: :ok
    end

    def create
        agent = Agent.create!(agent_params)
        render json: agent, status: :created
    end

    private

    def agent_params
        params.permit(:first_name, :last_name, :img_url, :license_number, :brokerage)
    end

end

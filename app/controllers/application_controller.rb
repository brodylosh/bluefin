class ApplicationController < ActionController::Base
  include ActionController::Cookies
  
  before_action :authorize
  
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :show_errors
  rescue_from ActionController::InvalidAuthenticityToken, with: :auth_error

  private

  def not_found
      render json: {error: "item not found"}, status: 404
  end

  def show_errors(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: 422
  end

  def auth_error(object)
    render json: { errors: object}
  end

  def authorize
    @current_buyer = Buyer.find_by(id: session[:buyer_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_buyer
  end
end
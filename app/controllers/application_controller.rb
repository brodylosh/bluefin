class ApplicationController < ActionController::Base
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors

    private

    def not_found
        render json: {error: "#{thing} not found"}, status: 404
    end

    def show_errors(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end
end

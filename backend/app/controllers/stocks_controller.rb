class StocksController < ApplicationController
    before_action :authorized, only: [:stocks]

    def stocks 
        byebug
        render json: {stocks: @user.stocks}
    end
end

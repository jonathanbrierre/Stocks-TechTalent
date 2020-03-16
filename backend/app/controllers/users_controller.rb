class UsersController < ApplicationController
    before_action :authorized, only: [:persist, :update, :destroy, :buy]

    def create
        # byebug
        @user = User.create(user_params)
        if @user.valid?
            @user.update(cash: 5000.00)
            @token = encode_token({ user_id: @user.id })
            render json: { user: UserSerializer.new(@user), jwt: @token, stocks: @user.stocks, transactions: @user.transactions }, status: :created
        else
            render json: { message: 'Failed to create user' }, status: :not_acceptable
        end
    end

    def buy 
        # byebug
        Transaction.create(user: @user, symbol: stock_params[:symbol], companyName: stock_params[:companyName], latestPrice: stock_params[:latestPrice], bought: true, quantity: params[:quantity].to_i)
        @stock = Stock.find_by(user: @user, symbol: stock_params[:symbol])
        if @stock 
            @stock.update(quantity: @stock.quantity + params[:quantity].to_i)
        else
            Stock.create(user: @user, symbol: stock_params[:symbol], companyName: stock_params[:companyName], latestPrice: stock_params[:latestPrice], open: stock_params[:open], close: stock_params[:close], quantity: params[:quantity].to_i)
        end

        @user.update(cash: @user.cash - stock_params[:latestPrice]*params[:quantity].to_i)
        render json: {user: UserSerializer.new(@user), stocks: @user.stocks, transactions: @user.transactions}
    end

    def login 
        @user = User.find_by(email: user_params[:email])

        if @user && @user.authenticate(user_params[:password])
        
            @token = encode_token({ user_id: @user.id })
            render json: { user: UserSerializer.new(@user), jwt: @token, stocks: @user.stocks, transactions: @user.transactions }, status: :accepted
        else
            render json: { message: 'Invalid username or password' }, status: :unauthorized
        end
    end
    
    def persist 
        @token = encode_token({user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: @token, stocks: @user.stocks, transactions: @user.transactions }, status: :accepted
    end

    private
    def user_params
        params.permit(:name, :email, :password)
    end

    def stock_params
        params.require(:stock).permit(:symbol, :companyName, :latestPrice, :open, :close)
    end

end

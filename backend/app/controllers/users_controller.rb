class UsersController < ApplicationController
    before_action :authorized, only: [:persist, :update, :destroy]

    def create
        # byebug
        @user = User.create(user_params)
        if @user.valid?
            @user.update(cash: 5000.00)
            @token = encode_token({ user_id: @user.id })
            render json: { user: UserSerializer.new(@user), jwt: @token  }, status: :created
        else
            render json: { message: 'Failed to create user' }, status: :not_acceptable
        end
    end

    def login 
        @user = User.find_by(email: user_params[:email])

        if @user && @user.authenticate(user_params[:password])
        
            @token = encode_token({ user_id: @user.id })
            render json: { user: UserSerializer.new(@user), jwt: @token }, status: :accepted
        else
            render json: { message: 'Invalid username or password' }, status: :unauthorized
        end
    end
    
    def persist 
        @token = encode_token({user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :accepted
    end

    private
    def user_params
        params.permit(:name, :email, :password)
    end

end

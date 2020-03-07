class UsersController < ApplicationController

    def create
        @user = User.create(user_params)
        if @user.valid?
            @token = encode_token({ user_id: @user.id })
            render json: { user: UserSerializer.new(@user), jwt: token  }, status: :created
        else
            render json: { error: 'failed to create user' }, status: :not_acceptable
        end
    end

    def login 
        @user = User.find_by(email: user_params[:email])

        if @user && @user.authenticate(user_params[:password])
        
            token = encode_token({ user_id: @user.id })
            render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
        else
            render json: { message: 'Invalid username or password' }, status: :unauthorized
        end
    end
    
    private
    def user_params
        params.require(:user).permit(:email, :password)
    end

end

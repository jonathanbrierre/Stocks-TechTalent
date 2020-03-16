const initialState = {
    userObj: {},
    token: '',
    stocks: [],
    transactions: []
}
export default function userManager(state = initialState, action){
    switch(action.type){
        case 'AUTHENTICATE_USER': 
            return {...state, userObj: action.payload.user, token: action.payload.jwt, stocks: action.payload.stocks, transactions: action.payload.transactions}
        
        case 'LOG_OUT':
            return initialState

        case 'UPDATE_CASH':
            return{...state, userObj: action.payload.user, stocks: action.payload.stocks, transactions: action.payload.transactions}
            
        default:
            return state
    }
}
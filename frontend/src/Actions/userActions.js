export const authenticateUser = (userObj) => {
    return{
        type: 'AUTHENTICATE_USER',
        payload: userObj
    }
}

export const updateUser = userObj => {
    return{
        type: 'UPDATE_CASH',
        payload: userObj
    }
}
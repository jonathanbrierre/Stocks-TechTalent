export const authenticateUser = (userObj) => {
    return{
        type: 'AUTHENTICATE_USER',
        payload: userObj
    }
}

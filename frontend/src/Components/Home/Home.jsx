import React, { Component } from 'react'
import Login from './Login'
import Signup from './SignUp'

class Home extends Component {

    //set up an auth toggle here
    render() {
        return (
            <div>
                Would you like to log in or sign up? <br></br>
                Login:
                <Login/>
                Signup: 
                <Signup/>
            </div>
        )
    }
}

export default Home

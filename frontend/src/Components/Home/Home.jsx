import React, { Component } from 'react'
import Login from './Login'

class Home extends Component {
    render() {
        return (
            <div>
                Would you like to log in or sign up?
                <Login/>
            </div>
        )
    }
}

export default Home

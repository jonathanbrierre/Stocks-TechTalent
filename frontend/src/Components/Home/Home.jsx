import React, { Component } from 'react'
import Login from './Login'
import Signup from './SignUp'

class Home extends Component {

    state = {
        auth: ''
    }

    handleOnClick = (e) => {
        if(this.state.auth === e.target.innerHTML){
            this.setState({auth:''})
        }else{
            this.setState({auth: e.target.innerHTML})
        }
    }

    renderForms = () => {
        let auth = this.state.auth
        if(auth === ''){
            return
        }else if(auth === 'Sign Up'){
            return <Signup/>
        }else if(auth === 'Log In'){
            return <Login/>
        }
    }
    render() {
        return (
            <div className = 'login'>
                Hello and Welcome to Jonathan Brierre's Tech Talent Pipeline Stock Application <br></br>
                Would you like to log in or sign up? <br></br>
                (Note - Your initial authentication may take a few seconds - Async fetch from heroku server) <br></br>
                <h4> <span className = 'homeAuth' onClick = {this.handleOnClick}>Log In</span> | <span className = 'homeAuth' onClick = {this.handleOnClick}>Sign Up</span></h4>
                {this.renderForms()}
            </div>
        )
    }
}

export default Home

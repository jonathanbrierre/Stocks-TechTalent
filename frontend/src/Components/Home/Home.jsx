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
                <a href = 'https://www.youtube.com/watch?v=f0PQrx_FJJY&feature=youtu.be' target = '_blank'> Click here to view the video demo</a> <br></br> <hr></hr>
                <h5>Would you like to log in or sign up?</h5> <br></br>
                (Note - Your initial authentication may take a few seconds and throw an error due to the server starting up - If you get an error, please try a second time. Thanks!) <br></br>
                <h4> <span className = 'homeAuth' onClick = {this.handleOnClick}>Log In</span> | <span className = 'homeAuth' onClick = {this.handleOnClick}>Sign Up</span></h4>
                {this.renderForms()}
            </div>
        )
    }
}

export default Home
